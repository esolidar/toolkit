import React, { FC, useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import TextareaField from '../../elements/textareaField';
import DropZoneBox from '../../elements/dropZoneBox';
import Loading from '../loading';
import Button from '../../elements/button';
import ProfileAvatar from '../profileAvatar';
import useIsFirstRender from '../../hooks/useIsFirstRender';
import Icon from '../icon';
import Picture from '../picture';
import Props from './NewPostBox.types';

const initialPostData = {
  public: '0',
  as_company: '0',
  text: '',
  type: 'post',
  description: '',
  og_description: '',
  og_image: '',
  og_title: '',
  title: '',
  link: '',
  domain: '',
  images: [],
};

const NewPostBox: FC<Props> = ({
  user,
  post,
  feedPost,
  feedUploadGallery,
  imagesResponse,
  scraper,
  loginAction,
  companyId,
  feedWebScrapter,
  feedPostResponse,
}: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [imagesToSend, setImagesToSend] = useState([]);
  const [shareLink, setShareLink] = useState(null);
  const [postData, setPostData] = useState(initialPostData);
  const intl = useIntl();
  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (feedPostResponse) {
      if (feedPostResponse.data) {
        setEditMode(false);
        setPostData(initialPostData);
        setImages([]);
        setImagesToSend([]);
        setIsLoading(false);
        setText('');
        setShareLink(null);
      }
    }
  }, [feedPostResponse]);

  useEffect(() => {
    if (imagesResponse) {
      setImagesToSend([]);
      const receivedImages = [];
      imagesResponse.images.map(img => {
        receivedImages.push(img.id);
      });

      const data = postData;
      data.images = receivedImages;
      setPostData(data);

      if (images.length === 0) {
        const newImages = imagesResponse.images;
        setImages(newImages);
      }
    }
  }, [imagesResponse]);

  const handleSubmitPost = () => {
    let type = 'post';
    const employee = user.work_email.find(u => u.company_id === companyId);
    if (shareLink && images.length === 0) type = 'share';
    if (images.length > 0 && !shareLink) type = 'gallery';
    if (images.length > 0 && shareLink) type = 'share_gallery';
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
      images: postData.images,
    };

    setPostData(data);
    if (data.text) {
      if (!isLoading) setIsLoading(true);
      if (imagesToSend.length > 0) {
        feedUploadGallery(companyId, imagesToSend);
      } else {
        feedPost(companyId, data);
      }
    }
  };

  useEffect(() => {
    if (!isFirstRender && imagesToSend.length === 0 && postData.images.length > 0)
      handleSubmitPost();
  }, [imagesToSend]);

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
    const newImagesToSend = [...imagesToSend];
    const arrayIndx = newImages.findIndex(o => o.id === id);
    newImages.splice(arrayIndx, 1);
    newImagesToSend.splice(arrayIndx, 1);
    setImages(newImages);
    setImagesToSend(newImagesToSend);
  };

  const handleSelectFile = ([file]) => {
    const type = typeof file.name === 'string' ? 'file' : 'blob';
    const thumb = type === 'blob' ? URL.createObjectURL(file) : file.preview;
    const newImage = [
      {
        id: images.length + 1,
        image: thumb,
      },
    ];
    const newImages = [...images, ...newImage];
    setImages(newImages);
    setImagesToSend([...imagesToSend, file]);

    // feedUploadGallery(companyId, file, images.length + 1);
  };

  return (
    <div
      className="feed-create-post"
      id="feed-create-post"
      data-testid="feed-create-post"
      onClick={handleEditMode}
      onKeyPress={handleEditMode}
    >
      {!user && (
        <div className="feed-create-post-header">
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
          {isLoading && (
            <div className="feed-create-post-loading">
              <Loading />
            </div>
          )}
          <ProfileAvatar
            thumb={user.thumbs.thumb}
            name={editMode ? user.name : intl.formatMessage({ id: 'feed.create.post.with.login' })}
          />
          {editMode && (
            <>
              <div className="feed-create-post-body" data-testid="body">
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
                  autofocus={true}
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

                      if (length === 2) {
                        width = 50;
                      }

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
                    })}
                  </div>
                )}
              </div>
              <div className="footer">
                <div className="add-image">
                  <DropZoneBox
                    accept=".jpg, .jpeg, .png"
                    onSelect={handleSelectFile}
                    showImagesPreviews={false}
                    showDropArea={false}
                    multiple={false}
                  >
                    <Button
                      extraClass="dark"
                      className="d-flex align-items-center"
                      fullWidth={false}
                      rounded={true}
                      size="md"
                      icon={
                        <>
                          <Icon iconClass="icon-camera2" style={{ fontSize: '24px' }} />
                          <Icon iconClass="icon-plus ml-2" style={{ fontSize: '10px' }} />
                        </>
                      }
                      type="button"
                    />
                  </DropZoneBox>
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
