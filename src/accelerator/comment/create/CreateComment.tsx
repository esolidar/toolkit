import React, { useState, useEffect, FC, useRef } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import classNames from 'classnames';
import ProfileAvatar from '../../../components/profileAvatar';
import TextareaField from '../../../elements/textareaField';
import Button from '../../../elements/button';
import Dropdown from '../../../elements/dropdown';
import Icon from '../../../elements/icon';
import parseYouTube from '../../../utils/parseYouTube';
import parseVimeo from '../../../utils/parseVimeo';
import FileCard from '../../../components/fileCard';
import DropZoneBox from '../../../elements/dropZoneBox';
import CustomModal from '../../../elements/customModal';
import ImageGrid from '../../../components/imageGrid';
import Props, { CommentProps, ReplyProps } from './CreateComment.types';

const fileTypes = '.doc,.pdf,.xls,.ppt,.pptx,.xlsx,.docx';
const fileSize = 20971520; // 20Mb
const maxFiles = 3;
const imageTypes = '.jpg, .jpeg, .png, .gif';
const imageSize = 5242880; // 5Mb
const maxImages = 99;

const CreateComment: FC<Props> = ({
  type = 'comment',
  isEditMode,
  parentComment,
  user,
  handlePostComment,
  getScraper,
  scrapper,
  placeholderText,
  galleryType,
  reference,
  closedCommentRef,
  onDropError,
  handleCleanComment,
}: Props) => {
  const { parentName, parentId } = parentComment || {};
  const intl: IntlShape = useIntl();
  const [editMode, setEditMode] = useState<boolean>(isEditMode || false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [filesList, setFilesList] = useState<any[]>([]);
  const [fileType, setFileType] = useState<'file' | 'image'>(null);
  const [imagesList, setImagesList] = useState<any>([]);
  const [isOpenModalUploads, setIsOpenModalUploads] = useState<boolean>(false);
  const [text, setText] = useState<string>(parentName || '');
  const [urlData, setUrlData] = useState<any>(null);
  const [videoData, setVideoData] = useState<any>(null);
  const isDropZoneOpen = useRef<any>(null);
  const isUrlCardDisabled = useRef<boolean>(null);

  // Add images to state
  const addUploadedImages = (images: any[]) => {
    const newImages = [];

    images.forEach((image, indx) => {
      newImages.push({ id: indx, image: image.preview, file: image });
    });
    setImagesList(newImages);
  };

  // Add files to state
  const addUploadedFiles = (files: any[]) => {
    const newFiles = [];

    files.forEach((file, indx) => {
      newFiles.push({ id: indx, name: file.name, size: file.size, file });
    });
    setFilesList(newFiles);
  };

  const handleEditMode = () => {
    setEditMode(true);
  };

  const getUrlData = (url: string) => {
    if (parseYouTube(url)) {
      fetch(`https://www.youtube.com/oembed?format=json&url=${url}&maxwidth=420`)
        .then(response => response.json())
        .then(response => {
          setVideoData({ ...response, videoUrl: url });
        });
    } else if (parseVimeo(url)) {
      fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
        .then(response => response.json())
        .then(response => {
          setVideoData({ ...response, videoUrl: url });
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
      imagesList.length === 0 &&
      filesList.length === 0
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
    setImagesList([]);
    setFilesList([]);
    setIsButtonDisabled(false);
    handleCleanComment();
    isUrlCardDisabled.current = false;
  };

  const handleDeleteFile = (id: number) => {
    const filtered = filesList.filter(file => file.id !== id);
    setFilesList(filtered);
  };

  const handleDeleteImage = (id: number) => {
    const filtered = imagesList.filter(file => file.id !== id);
    setImagesList(filtered);
  };

  const handleDisabled = (string: string) => {
    const emptySpace: string = string.replace(/ /g, '');
    const emptyLine: string = string.replace(/\n/g, '');

    return (
      string.length === 0 || isButtonDisabled || emptySpace.length === 0 || emptyLine.length === 0
    );
  };

  useEffect(() => {
    setUrlData(scrapper);
  }, [scrapper]);

  useEffect(() => {
    setEditMode(isEditMode);
  }, [isEditMode]);

  useEffect(() => {
    if (closedCommentRef) {
      // eslint-disable-next-line no-param-reassign
      closedCommentRef.current = handleClickCancel;
    }
  }, []);

  useEffect(() => {
    if (fileType) isDropZoneOpen.current();
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
      id: 1,
      leftIcon: 'Image',
      onClick: () => handleAddImages(),
      show: true,
      text: intl.formatMessage({ id: 'toolkit.add.images' }),
    },
    {
      id: 2,
      leftIcon: 'Attachment',
      onClick: () => handleAddFiles(),
      show: true,
      text: intl.formatMessage({ id: 'toolkit.add.documents' }),
    },
  ];

  const isDisabledAttachments =
    !!videoData || !!urlData || imagesList?.length > 0 || filesList?.length > 0;

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
            parentId={parentId}
            editMode={editMode}
            text={text}
            handleChange={handleChange}
            placeholderText={placeholderText}
            reference={reference}
          />
        )}
        {type === 'reply' && (
          <Reply
            user={user}
            parentId={parentId}
            text={text}
            handleChange={handleChange}
            placeholderText={placeholderText}
            reference={reference}
          />
        )}

        {editMode && (
          <>
            <div className="accelerator-comment-create__attachments">
              {imagesList?.length > 0 && (
                <div className="accelerator-comment-create__attachments-images">
                  <ImageGrid
                    editMode={true}
                    items={imagesList}
                    type={galleryType}
                    onDeleteImage={handleDeleteImage}
                  />
                </div>
              )}
              {filesList?.map(file => {
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
            <div className="accelerator-comment-create__buttons">
              <Dropdown
                items={attachmentOptions}
                disabled={isDisabledAttachments}
                customButton={
                  <Button
                    size={type === 'comment' ? 'md' : 'sm'}
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
                size={type === 'comment' ? 'md' : 'sm'}
                text={intl.formatMessage({ id: 'cancel' })}
              />
              <Button
                extraClass="primary-full"
                dataTestId={`create-comment-${parentComment?.id || '0'}`}
                onClick={() => {
                  setIsButtonDisabled(true);
                  handlePostComment({
                    text,
                    video: videoData,
                    parentId,
                    parentName,
                    images: imagesList,
                    files: filesList,
                  });
                }}
                size={type === 'comment' ? 'md' : 'sm'}
                disabled={handleDisabled(text)}
                text={intl.formatMessage({ id: 'feed.create.post' })}
              />
            </div>
          </>
        )}
      </div>
      <DropZoneBox
        showDropArea={false}
        multiple={true}
        isDropZoneOpen={isDropZoneOpen}
        accept={fileType === 'image' ? imageTypes : fileTypes}
        onSelect={files => {
          if (fileType === 'image') addUploadedImages(files);
          else addUploadedFiles(files);
        }}
        maxFiles={fileType === 'image' ? maxImages : maxFiles}
        maxSize={fileType === 'image' ? imageSize : fileSize}
        onDropError={(errorList: any) => {
          errorList.map(item => {
            if (
              item.code === 'file-too-large' ||
              (fileType === 'file' && item.code === 'too-many-files')
            ) {
              setIsOpenModalUploads(true);
            }

            if (onDropError) onDropError({ code: item.code, fileType });
          });
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
  reference,
  parentId,
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
            size="xl"
            field="text"
            id={`text-${parentId || 0}`}
            resize
            cssClass="no-border"
            onChange={handleChange}
            placeholder={placeholderText}
            value={text.replace(/<\/?[^>]+(>|$)/g, '')}
            dataTestId={`text-${parentId || 0}`}
            autofocus={reference?.current || editMode}
            maxLength={64000}
            isMaxLengthValueVisible={false}
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
  placeholderText,
  reference,
  parentId,
}: ReplyProps) => {
  return (
    <div className="accelerator-comment-create__reply">
      <ProfileAvatar thumb={user?.thumbs?.thumb} thumbSize="md" />
      <div className="accelerator-comment-create__reply-input">
        <TextareaField
          size="xl"
          reference={reference}
          field="text"
          id={`text-${parentId || 0}`}
          resize
          cssClass="no-border"
          onChange={handleChange}
          placeholder={placeholderText}
          value={text.replace(/<\/?[^>]+(>|$)/g, '')}
          fixedValue={true}
          dataTestId={`text-${parentId || 0}`}
          autofocus={true}
        />
      </div>
    </div>
  );
};
