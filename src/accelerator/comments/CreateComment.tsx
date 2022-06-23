import React, { useState, useEffect, FC, useRef } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import classNames from 'classnames';
import ProfileAvatar from '../../components/profileAvatar';
import TextareaField from '../../elements/textareaField';
import Button from '../../elements/button';
import Dropdown from '../../elements/dropdown';
import Icon from '../../elements/icon';
import Props, { CommentProps, ReplyProps } from './CreateComment.types';
import parseYouTube from '../../utils/parseYouTube';
import parseVimeo from '../../utils/parseVimeo';
import FileCard from '../../components/fileCard';
import DropZoneBox from '../../elements/dropZoneBox';
import getEnvVar from '../../utils/getEnvVar';
import Preview from '../../components/preview';

const CreateComment: FC<Props> = ({
  type = 'comment',
  // comment, // TODO: See if is necessary comment prop
  user,
  files,
  handlePostComment,
  postUploadFiles,
  postUploadImages,
  postDeleteFile,
  postDeleteImage,
  getScraper,
  scrapper,
  placeholderText,
  images,
}: Props) => {
  const intl: IntlShape = useIntl();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [videoData, setVideoData] = useState<any>(null);
  const [urlData, setUrlData] = useState<any>(null);
  const [imageList, setImageList] = useState<any>(images || []);
  const [filesData, setFilesData] = useState<any[]>(files);
  const [fileType, setFileType] = useState<'file' | 'image'>(null);
  const isDropZoneOpen = useRef(null);

  const handleEditMode = () => {
    setEditMode(true);
  };

  useEffect(() => {
    setUrlData(scrapper);
  }, [scrapper]);

  useEffect(() => {
    setImageList(images);
  }, [images]);

  useEffect(() => {
    setFilesData(files);
  }, [files]);

  const getUrlData = (url: string) => {
    if (parseYouTube(url)) {
      fetch(`https://www.youtube.com/oembed?format=json&url=${url}&maxwidth=420`)
        .then(response => response.json())
        .then(response => {
          setVideoData(response);
        });
    } else if (parseVimeo(url)) {
      fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
        .then(response => response.json())
        .then(response => {
          setVideoData(response);
        });
    } else {
      getScraper(url);
    }
  };

  const handleChange = async e => {
    const { value } = e.target;
    const urlRegex = /(https?:\/\/[^ ]*)/;
    const url = text.match(urlRegex);
    setText(value);

    if (url && !videoData && !urlData) {
      getUrlData(url[1]);
    }
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
      if (url && !videoData && !urlData) {
        getUrlData(url);
      }
    });
  };

  const handleClickCancel = () => {
    setEditMode(false);
    setText('');
    setVideoData(null);
    setUrlData(null);
    setImageList([]);
    setFilesData([]);
  };

  const handleDeleteFile = (id: number) => {
    postDeleteFile(id);
    const filtered = filesData.filter(file => file.id !== id);
    setFilesData(filtered);
  };

  useEffect(() => {
    isDropZoneOpen.current();
  }, [fileType]);

  const handleAddImages = () => {
    if (fileType === 'image') isDropZoneOpen.current();
    else setFileType('image');
  };

  const handleAddFiles = () => {
    if (fileType === 'file') isDropZoneOpen.current();
    else setFileType('file');
  };

  const attachmentOptions = [
    {
      id: 0,
      leftIcon: 'Image',
      onClick: handleAddImages,
      show: true,
      text: intl.formatMessage({ id: 'Add images' }),
    },
    {
      id: 0,
      leftIcon: 'Attachment',
      onClick: handleAddFiles,
      show: true,
      text: intl.formatMessage({ id: 'Add documents' }),
    },
  ];

  return (
    <>
      <div
        className={classNames('accelerator-comment-create', {
          'comment-reply-box': type === 'reply',
        })}
        onClick={() => {
          if (!editMode) handleEditMode();
        }}
        onKeyPress={() => {
          if (!editMode) handleEditMode();
        }}
      >
        {type === 'comment' && (
          <Comment
            user={user}
            editMode={editMode}
            handdlePaste={handdlePaste}
            text={text}
            handleChange={handleChange}
            placeholderText={placeholderText}
          />
        )}
        {type === 'reply' && (
          <Reply
            user={user}
            handdlePaste={handdlePaste}
            text={text}
            handleChange={handleChange}
            videoData={videoData}
            handlePostComment={handlePostComment}
            placeholderText={placeholderText}
            attachmentOptions={attachmentOptions}
          />
        )}

        {editMode && (
          <>
            <div className="accelerator-comment-create__attachments">
              {imageList.length > 0 && (
                <div className="accelerator-comment-create__attachments-images">
                  {/* TODO: Change this for new image grid component */}
                  {imageList.map(image => (
                    <Preview
                      handleDeleteImage={postDeleteImage}
                      img={{
                        alt: 'Imagem de teste',
                        src: `${getEnvVar('SERVER_LESS_RESIZE_IMAGE')}/${
                          image.image
                        }?width=136&height=92`,
                        width: '136px',
                        height: '92px',
                      }}
                    />
                  ))}
                </div>
              )}
              {filesData?.map(file => {
                return (
                  <FileCard
                    key={file.id}
                    size={file.file_size}
                    title={file.name}
                    dropdownItems={[
                      {
                        id: file.id,
                        leftIcon: 'Trash',
                        onClick: () => handleDeleteFile(file.id),
                        text: intl.formatMessage({ id: 'delete' }),
                      },
                    ]}
                  />
                );
              })}

              {videoData && (
                <FileCard
                  title={videoData.title}
                  image={videoData.thumbnail_url}
                  subtitle={
                    <>
                      {videoData.provider_name}
                      <span className="accelerator-comment-create__attachments-channel">
                        {videoData.author_name}
                      </span>
                    </>
                  }
                  dropdownItems={[
                    {
                      id: 0,
                      leftIcon: 'Trash',
                      onClick: () => setVideoData(null),
                      text: intl.formatMessage({ id: 'delete' }),
                    },
                  ]}
                />
              )}

              {urlData && (
                <FileCard
                  title={urlData.title}
                  url={urlData.domain}
                  image={urlData.og_image}
                  subtitle={urlData.description}
                  dropdownItems={[
                    {
                      id: 0,
                      leftIcon: 'Trash',
                      onClick: () => setUrlData(null),
                      text: intl.formatMessage({ id: 'delete' }),
                    },
                  ]}
                />
              )}
            </div>
            {type === 'comment' && (
              <div className="accelerator-comment-create__buttons">
                <Dropdown
                  items={attachmentOptions}
                  customButton={
                    <Button
                      extraClass="secondary"
                      className="attachment-btn"
                      disabled={!!videoData}
                      iconLeft={<Icon name="Plus" size="sm" />}
                      iconRight={<Icon name="Attachment" size="sm" />}
                    />
                  }
                />
                <Button
                  extraClass="secondary"
                  onClick={handleClickCancel}
                  size="md"
                  text={intl.formatMessage({ id: 'cancel' })}
                />
                <Button
                  extraClass="primary-full"
                  onClick={() => handlePostComment({ text, video: videoData })}
                  size="md"
                  disabled={text.length === 0}
                  text={intl.formatMessage({ id: 'Post' })}
                />
              </div>
            )}
          </>
        )}
      </div>
      <DropZoneBox
        showDropArea={false}
        multiple={true}
        isDropZoneOpen={isDropZoneOpen}
        accept={
          fileType === 'image'
            ? '.jpg, .jpeg, .png'
            : '.doc,.odt,.pdf,.xls,.ods,.ppt,.odp,.csv,.text,.txt,.pptx,.xlsx,.xltx,.docx'
        }
        onSelect={files => {
          if (fileType === 'image') postUploadImages(files);
          else postUploadFiles(files);
        }}
      />
    </>
  );
};

export default CreateComment;

const Comment: FC<CommentProps> = ({
  user,
  editMode,
  handleChange,
  text,
  handdlePaste,
  placeholderText,
}: CommentProps) => {
  const intl: IntlShape = useIntl();
  return (
    <>
      <ProfileAvatar
        thumb={user?.thumbs?.thumb}
        className={!editMode ? 'placeholder-text' : ''}
        name={
          editMode
            ? user?.name
            : intl.formatMessage({
                id: 'Share ideas, suggestions or initiaves for this project...',
              })
        }
      />
      {editMode && (
        <div className="feed-create-post-body" data-testid="body">
          <TextareaField
            field="text"
            id="text"
            resize
            cssClass="no-border"
            onChange={handleChange}
            placeholder={placeholderText}
            value={text.replace(/<\/?[^>]+(>|$)/g, '')}
            onPaste={handdlePaste}
            dataTestId="text"
            autofocus={true}
          />
        </div>
      )}
    </>
  );
};

const Reply: FC<ReplyProps> = ({
  user,
  handleChange,
  text,
  handdlePaste,
  attachmentOptions,
  videoData,
  handlePostComment,
  placeholderText,
}: ReplyProps) => {
  const intl: IntlShape = useIntl();
  return (
    <div className="accelerator-comment-create__reply">
      <ProfileAvatar thumb={user?.thumbs?.thumb} thumbSize="md" />
      <div className="accelerator-comment-create__reply-input">
        <TextareaField
          field="text"
          id="text"
          resize
          cssClass="no-border"
          onChange={handleChange}
          placeholder={placeholderText}
          value={text.replace(/<\/?[^>]+(>|$)/g, '')}
          onPaste={handdlePaste}
          dataTestId="text"
        />
      </div>
      <Dropdown
        items={attachmentOptions}
        customButton={
          <Button
            extraClass="primary-full"
            className="attachment-btn"
            type="icon"
            ghost
            size="sm"
            theme="light"
            disabled={!!videoData}
            icon={<Icon name="Attachment" size="sm" />}
          />
        }
      />
      {text.length > 0 && (
        <Button
          extraClass="primary-full"
          onClick={() => handlePostComment({ text, video: videoData })}
          size="sm"
          disabled={text.length === 0}
          text={intl.formatMessage({ id: 'Post' })}
        />
      )}
    </div>
  );
};
