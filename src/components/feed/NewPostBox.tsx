import React, { FC, useState, useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import TextareaField from '../../elements/textareaField';
import Button from '../../elements/button';
import Icon from '../icon';
import Picture from '../picture';
import Props from './NewPostBox.types';

const NewPostBox: FC<Props> = ({
  user,
  post,
  feedPost,
  feedUploadGallery,
  deleteImages,
  imagesResponse,
  scraper,
  loginAction,
  companyId,
  feedWebScrapter,
}: Props): JSX.Element => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [shareLink, setShareLink] = useState(null);
  const intl = useIntl();
  const inputFile = useRef(null);

  useEffect(() => {
    if (imagesResponse) {
      const newImages = [...images, ...imagesResponse.images];
      setImages(newImages);
    }
  }, [imagesResponse]);

  useEffect(() => {
    if (scraper) {
      setShareLink(scraper);
    }
  }, [scraper]);

  useEffect(() => {
    if (post) {
      setEditMode(true);
      setText(post.text);
    }
  }, [post]);

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleChange = e => {
    const { value } = e.target;
    setText(value);
  };

  const deleteShareLink = () => {
    setShareLink(null);
  };

  const handleSubmitPost = () => {
    let type = 'post';
    const employee = user.work_email.find(u => u.company_id === companyId);

    const imageIds = [];
    images.map(img => {
      imageIds.push(img.id);
    });

    if (shareLink && images.length === 0) type = 'share';
    if (images.length > 0 && !shareLink) type = 'gallery';
    if (images.length > 0 && shareLink) type = 'share-gallery';

    const data = {
      public: employee ? '0' : '1',
      as_company: '0',
      text,
      type,
      description: shareLink ? shareLink.description : '',
      og_description: shareLink ? shareLink.og_description : '',
      og_image: shareLink ? shareLink.og_image : '',
      og_title: shareLink ? shareLink.og_title : '',
      title: shareLink ? shareLink.title : '',
      link: shareLink ? shareLink.link : '',
      domain: shareLink ? shareLink.domain : '',
      images: imageIds,
    };

    feedPost(companyId, data);
  };

  const handdlePaste = e => {
    e.clipboardData.items[0].getAsString(text => {
      const message = text;
      let url;
      const regex = new RegExp(/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi);
      const isAbsolute = new RegExp('^([a-z]+://|//)', 'i');
      const tempUrl = regex.exec(message);
      if (tempUrl !== null) {
        url = tempUrl[0].trim();
        if (!isAbsolute.test(url)) {
          url = `http://${url}`;
        }
      }
      if (url && !shareLink) {
        feedWebScrapter(companyId, url);
      }
    });
  };

  const deleteImage = (id: number) => {
    const newImages = [...images];
    const i = images.findIndex(o => o.id === id);
    newImages.splice(i, 1);
    setImages(newImages);

    deleteImages(companyId, id);
  };

  const handleOpenFile = () => {
    inputFile.current.click();
  };

  const handleSelectFile = e => {
    const thumb = window.URL.createObjectURL(e.target.files[0]);
    const newImage = [
      {
        id: images.length + 1,
        image: thumb,
      },
    ];
    const newImages = [...images, ...newImage];
    setImages(newImages);
    feedUploadGallery(companyId, e.target.files[0], images.length + 1);
  };

  return (
    <div
      className="feed-create-post"
      id="feed-create-post"
      data-testid="feed-create-post"
      onClick={handleEditMode}
    >
      {!user && (
        <div className="header">
          <span>
            <FormattedMessage id="feed.create.post.without.login" />
          </span>
          <Button
            dataTestId="login-button"
            extraClass="link"
            fullWidth={false}
            onClick={loginAction}
            rounded={true}
            size="md"
            text={<FormattedMessage id="login" />}
            type="button"
          />
        </div>
      )}
      {user && (
        <>
          <div className="header" data-testid="header">
            <img src={user.thumbs.thumb} alt={user.name} className="thumb" />
            {!editMode ? (
              <span>
                <FormattedMessage id="feed.create.post.with.login" />
              </span>
            ) : (
              <span>{user.name}</span>
            )}
          </div>
          {editMode && (
            <>
              <div className="body" data-testid="body">
                <TextareaField
                  field="text"
                  id="text"
                  resize={true}
                  cssClass="no-border"
                  onChange={handleChange}
                  placeholder={intl.formatMessage({
                    id: 'feed.create.post.with.login',
                  })}
                  value={text}
                  onPaste={handdlePaste}
                  dataTestId="text"
                />
                {shareLink && (
                  <div className="share-link-preview" data-testid="share-link-preview">
                    <button
                      type="button"
                      onClick={deleteShareLink}
                      className="delete-share-link"
                      data-testid="share-link-preview-btn"
                    >
                      <Icon iconClass="icon-close" />
                    </button>
                    {shareLink.og_image && (
                      <Picture
                        src={shareLink.og_image}
                        alt={shareLink.og_title}
                        className="w-100"
                      />
                    )}
                    <div className="share-link-preview-domain">{shareLink.domain}</div>
                    <div className="share-link-preview-title">{shareLink.title}</div>
                    <div className="share-link-preview-og_description">
                      {shareLink.og_description}
                    </div>
                  </div>
                )}
                {images.length > 0 && (
                  <div className="images-preview" data-testid="images-preview">
                    {images.map((image, i) => {
                      let width = 100;
                      const { length } = images;

                      if (length === 3) {
                        if (i < 1) width = 100;
                        if (i >= 1) width = 50;
                      }

                      if (length === 4) {
                        width = 100 / (length / 2);
                      }

                      if (length > 4) {
                        if (i <= 1) width = 50;
                        if (i > 1) width = 33;
                      }

                      if (length === 6) {
                        width = 33;
                      }

                      if (length > 6) {
                        if (i <= 1) width = 50;
                        if (i > 1) width = 50;
                        if (i > 3) width = 33;
                        if (i >= 7) width = 100;
                      }

                      if (length <= 2) {
                        return (
                          <div className="post-image-box-1" key={image.id}>
                            <button
                              type="button"
                              onClick={() => deleteImage(image.id)}
                              className="delete-image"
                              data-testid="delete-image"
                            >
                              <Icon iconClass="icon-close" />
                            </button>
                            <img
                              src={image.image}
                              alt="image"
                              className={`w-${JSON.stringify(width)}`}
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={image.id}
                            style={{ backgroundImage: `url("${image.image}")` }}
                            className={`post-image-box w-${JSON.stringify(width)}`}
                            data-testid="post-image-box"
                          >
                            &nbsp;
                            <button
                              type="button"
                              onClick={() => deleteImage(image.id)}
                              className="delete-image"
                              data-testid="delete-image"
                            >
                              <Icon iconClass="icon-close" />
                            </button>
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
              <div className="footer">
                <div className="add-image">
                  <Button
                    extraClass="dark"
                    fullWidth={false}
                    onClick={handleOpenFile}
                    rounded={true}
                    size="md"
                    text={
                      <>
                        <Icon iconClass="icon-camera" />
                        <span>+</span>
                      </>
                    }
                    type="button"
                  />
                  <input
                    type="file"
                    id="file"
                    accept="image/png, image/jpeg"
                    onChange={handleSelectFile}
                    ref={inputFile}
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="add-post">
                  <Button
                    extraClass="primary-full"
                    fullWidth={false}
                    onClick={handleSubmitPost}
                    rounded={true}
                    size="md"
                    text={<FormattedMessage id="feed.create.post" />}
                    type="button"
                    disabled={text.length === 0}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default NewPostBox;
