import React, { useEffect, useState, useRef, FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Button from '../../elements/button';
import CreateComment from '../comment/create/CreateComment';
import DeleteModal from '../../components/modals/deleteModal';
import Dropdown from '../../elements/dropdown';
import FileCard from '../../components/fileCard';
import ImageGrid from '../../components/imageGrid';
import Preview from '../../components/preview';
import ProfileAvatar from '../../components/profileAvatar';
import ReadMoreText from '../../components/readMoreText';
import dateDistance from '../../utils/dateDistance';
import Props, { NoteSingleProps } from './Note.types';
import Icon from '../../elements/icon';

const Note: FC<Props> = ({
  noteSingleArgs,
  handleViewAllReplies,
  handleViewChildReplies,
  handleDeleteNote,
}: Props) => {
  const intl: IntlShape = useIntl();
  const {
    note: { replies = [], repliesCount = 0, id },
  } = noteSingleArgs;

  return (
    <div className="view-comment">
      <NoteSingle {...noteSingleArgs} parentComment={{ parentId: id }} />

      {replies?.length > 0 && (
        <>
          <div className="view-comment__note__line" />

          {replies.map((item, key) => (
            <React.Fragment key={key}>
              <NoteSingle
                note={item}
                handleDeleteNote={handleDeleteNote}
                parentComment={{ parentId: item.id, parentName: `@${item.user.name} ` }}
                createCommentArgs={noteSingleArgs.createCommentArgs}
                reply={true}
              />

              {item.replies && (
                <>
                  <div className="view-comment__note__secondLevel">
                    {item.replies.map((secondLevelReply, keySecondLevelReply) => (
                      <NoteSingle
                        handleDeleteNote={handleDeleteNote}
                        key={keySecondLevelReply}
                        parentComment={{
                          parentId: item.id,
                          parentName: `@${secondLevelReply.user.name} `,
                        }}
                        note={secondLevelReply}
                        createCommentArgs={noteSingleArgs.createCommentArgs}
                        reply={true}
                      />
                    ))}

                    {item.replies.length !== item.repliesCount && (
                      <Button
                        extraClass="link"
                        onClick={handleViewChildReplies}
                        text={intl.formatMessage(
                          { id: 'toolkit.comments.number.replies' },
                          { value: item.repliesCount - item.replies.length }
                        )}
                      />
                    )}
                  </div>
                </>
              )}
            </React.Fragment>
          ))}

          {replies.length !== repliesCount && (
            <Button
              extraClass="link"
              onClick={handleViewAllReplies}
              text={intl.formatMessage({ id: 'toolkit.comments.view.replies' })}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Note;

const NoteSingle: FC<NoteSingleProps> = ({
  note,
  reply = false,
  parentComment,
  createCommentArgs,
  handleDeleteNote,
}: NoteSingleProps) => {
  const {
    id,
    user_id: noteUserId,
    user: {
      id: userId,
      name,
      thumbs: { thumb },
    },
    created_at: date,
    text,
    images,
    files,
    // eslint-disable-next-line camelcase
    scraping_data,
    deleted_at: deleted,
  } = note;
  const preview = JSON.parse(scraping_data);
  const intl: IntlShape = useIntl();
  const inputEl = useRef(null);
  const deleteNoteId = useRef(null);
  const [isReply, setIsReply] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleReply = () => {
    setIsReply(!isReply);
  };

  useEffect(() => {
    if (isReply) {
      inputEl.current = true;
    }
  }, [isReply]);

  return (
    <div className="view-comment__note">
      <div className="view-comment__header">
        <ProfileAvatar
          thumb={thumb}
          name={name}
          date={dateDistance({ date: new Date(date), formatMessage: intl.formatMessage })}
          thumbSize="lg"
        />

        {userId === noteUserId && !deleted && (
          <Dropdown
            items={[
              {
                id: 0,
                leftIcon: 'Trash',
                text: intl.formatMessage({ id: 'delete' }),
                onClick: () => {
                  deleteNoteId.current = id;
                  setIsOpenDeleteModal(true);
                },
              },
            ]}
            toggleIcon="MoreVertical"
          />
        )}
      </div>

      {!deleted ? (
        <>
          <div className="view-comment__content">
            <ReadMoreText text={text} charLimit={512} gradient={true} />
          </div>

          {images && images.length > 0 && (
            <ImageGrid items={images} type="inline" editMode={false} onDeleteImage={() => {}} />
          )}

          {files &&
            files.length > 0 &&
            files.map(({ title, size }, key) => (
              <FileCard key={key} size={size} title={title} showDownloadButton />
            ))}

          {preview &&
            (preview.type === 'video' ? (
              <Preview
                hover
                type="video"
                // videoDetails={preview.videoDetails}
                videoDetails={{
                  providerName: preview.provider_name,
                  title: preview.title,
                  thumbnailUrl: `url('${preview.thumbnail_url}')`,
                  videoUrl: preview.videoUrl,
                }}
                videoUrl={preview.videoUrl}
                handleClickPreview={() => window.open(preview.videoUrl)}
              />
            ) : (
              <FileCard
                link={preview.link}
                url={preview.domain}
                title={preview.title}
                image={preview.og_image}
                subtitle={preview.description}
              />
            ))}

          <>
            {!isReply ? (
              <Button
                size={reply ? 'sm' : 'md'}
                onClick={handleReply}
                extraClass="secondary"
                text={intl.formatMessage({ id: 'reply' })}
                fullWidth={false}
              />
            ) : (
              <CreateComment
                {...createCommentArgs}
                parentComment={parentComment}
                handleCleanComment={() => setIsReply(false)}
                reference={inputEl}
                placeholderText={intl.formatMessage({ id: 'commentHere' })}
              />
            )}
          </>
        </>
      ) : (
        <div className="view-comment__deleted">
          <Icon name="Block" size="sm" /> {intl.formatMessage({ id: 'toolkit.notes.deleted' })}
        </div>
      )}

      {userId === noteUserId && !deleted && (
        <DeleteModal
          isOpen={isOpenDeleteModal}
          onClickDelete={() => {
            handleDeleteNote(deleteNoteId.current);
            setIsOpenDeleteModal(false);
            deleteNoteId.current = null;
          }}
          onClickCancel={() => {
            setIsOpenDeleteModal(false);
          }}
          title={intl.formatMessage({ id: 'toolkit.notes.delete.title' })}
          bodyText={intl.formatMessage({
            id: 'toolkit.notes.delete.description',
          })}
        />
      )}
    </div>
  );
};
