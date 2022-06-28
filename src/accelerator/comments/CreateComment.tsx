import React, { useState, useEffect, FC, useRef } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
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
import CustomModal from '../../elements/customModal';

const fileTypes = '.doc,.pdf,.xls,.ppt,.pptx,.xlsx,.docx';
const fileSize = 20000000; // 20Mb
const maxFiles = 3;
const imageTypes = '.jpg, .jpeg, .png';
const imageSize = 5000000; // 5Mb
const maxImages = 99;

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
  onDropError,
}: Props) => {
  const intl: IntlShape = useIntl();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [filesData, setFilesData] = useState<any[]>(files);
  const [fileType, setFileType] = useState<'file' | 'image'>(null);
  const [imageList, setImageList] = useState<any>(images || []);
  const [isOpenModalUploads, setIsOpenModalUploads] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [urlData, setUrlData] = useState<any>(null);
  const [videoData, setVideoData] = useState<any>(null);
  const isDropZoneOpen = useRef<any>(null);
  const isUrlCardDisabled = useRef<boolean>(null);

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
    if (value === '') isUrlCardDisabled.current = false;

    const urlRegex = /(https?:\/\/[^ ]*)/;
    const url = value.match(urlRegex);
    setText(value);

    if (
      url &&
      !videoData &&
      !urlData &&
      !isUrlCardDisabled.current &&
      imageList.length === 0 &&
      filesData.length === 0
    ) {
      isUrlCardDisabled.current = true;
      getUrlData(url[1]);
    }
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
    const filtered = filesData.filter(file => file.id !== id);
    setFilesData(filtered);
    postDeleteFile(id);
  };

  const handleDeleteImage = (id: number) => {
    const filtered = imageList.filter(file => file.id !== id);
    setImageList(filtered);
    postDeleteImage(id);
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
      text: intl.formatMessage({ id: 'toolkit.add.images' }),
    },
    {
      id: 0,
      leftIcon: 'Attachment',
      onClick: handleAddFiles,
      show: true,
      text: intl.formatMessage({ id: 'toolkit.add.documents' }),
    },
  ];

  const isDisabledAttachments =
    !!videoData || !!urlData || imageList.length > 0 || filesData.length > 0;

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
            text={text}
            handleChange={handleChange}
            placeholderText={placeholderText}
          />
        )}
        {type === 'reply' && (
          <Reply
            user={user}
            text={text}
            handleChange={handleChange}
            videoData={videoData}
            handlePostComment={handlePostComment}
            placeholderText={placeholderText}
            attachmentOptions={attachmentOptions}
            isDisabledAttachments={isDisabledAttachments}
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
                      handleDeleteImage={() => handleDeleteImage(image.id)}
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
                  disabled={isDisabledAttachments}
                  customButton={
                    <Button
                      extraClass="secondary"
                      className="attachment-btn"
                      disabled={isDisabledAttachments}
                      iconLeft={<Icon name="Plus" size="sm" />}
                      iconRight={<Icon name="Attachment" size="sm" />}
                    />
                  }
                />
                <Button
                  extraClass="secondary"
                  dataTestId="cancel-btn"
                  onClick={handleClickCancel}
                  size="md"
                  text={intl.formatMessage({ id: 'cancel' })}
                />
                <Button
                  extraClass="primary-full"
                  onClick={() => handlePostComment({ text, video: videoData })}
                  size="md"
                  disabled={text.length === 0}
                  text={intl.formatMessage({ id: 'feed.create.post' })}
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
        accept={fileType === 'image' ? imageTypes : fileTypes}
        onSelect={files => {
          if (fileType === 'image') postUploadImages(files);
          else postUploadFiles(files);
        }}
        maxFiles={fileType === 'image' ? maxImages : maxFiles}
        maxSize={fileType === 'image' ? imageSize : fileSize}
        onDropError={(errorList: any) => {
          setIsOpenModalUploads(true);
          onDropError(errorList);
        }}
      />
      <CustomModal
        show={isOpenModalUploads}
        actionsChildren={
          <>
            <Button
              extraClass="primary-full"
              size="md"
              text={
                fileType === 'image'
                  ? intl.formatMessage({ id: 'toolkit.select.images' })
                  : intl.formatMessage({ id: 'toolkit.select.documents' })
              }
              onClick={() => {
                if (fileType === 'image') handleAddImages();
                else handleAddFiles();

                setIsOpenModalUploads(false);
              }}
              dataTestId="delete-file"
            />
            <Button
              extraClass="dark"
              onClick={() => setIsOpenModalUploads(false)}
              size="md"
              text={intl.formatMessage({ id: 'cancel' })}
              dataTestId="close-delete-file"
            />
          </>
        }
        onHide={() => {
          setIsOpenModalUploads(false);
        }}
        bodyChildren={
          <p>
            {fileType === 'image' ? (
              <FormattedMessage id="toolkit.upload.images.error.size" />
            ) : (
              <FormattedMessage id="toolkit.upload.documents.error.size" />
            )}
          </p>
        }
        title={
          fileType === 'image'
            ? intl.formatMessage({ id: 'toolkit.upload.images' })
            : intl.formatMessage({ id: 'toolkit.upload.documents' })
        }
        size="md"
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
  placeholderText,
}: CommentProps) => {
  return (
    <>
      <ProfileAvatar
        thumb={user?.thumbs?.thumb}
        className={!editMode ? 'placeholder-text' : ''}
        name={editMode ? user?.name : placeholderText}
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
  attachmentOptions,
  videoData,
  handlePostComment,
  placeholderText,
  isDisabledAttachments,
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
          dataTestId="text"
        />
      </div>
      <Dropdown
        items={attachmentOptions}
        disabled={isDisabledAttachments}
        customButton={
          <Button
            extraClass="primary-full"
            className="attachment-btn"
            type="icon"
            ghost
            size="sm"
            theme="light"
            disabled={isDisabledAttachments}
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
          text={intl.formatMessage({ id: 'feed-create-post-body' })}
        />
      )}
    </div>
  );
};
