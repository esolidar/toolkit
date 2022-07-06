import React, { useEffect, useState, useRef, FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Button from '../../elements/button';
import CreateComment from '../comment/create/CreateComment';
import Dropdown from '../../elements/dropdown';
import FileCard from '../../components/fileCard';
import ImageGrid from '../../components/imageGrid';
import Preview from '../../components/preview';
import ProfileAvatar from '../../components/profileAvatar';
import ReadMoreText from '../../components/readMoreText';
import dateDistance from '../../utils/dateDistance';
import Props, { NoteSingleProps } from './Note.types';

const Note: FC<Props> = ({
  noteSingleArgs,
  handleViewAllReplies,
  handleViewChildReplies,
}: Props) => {
  const intl: IntlShape = useIntl();
  const { replies = [], repliesTotal = 0 } = noteSingleArgs;

  return (
    <div className="view-comment">
      <NoteSingle {...noteSingleArgs} />

      {replies?.length > 0 && (
        <>
          <div className="view-comment__note__line" />

          {replies.map((item, key) => (
            <React.Fragment key={key}>
              <NoteSingle {...item} reply={true} />

              {item.replies && (
                <>
                  <div className="view-comment__note__secondLevel">
                    {item.replies.map((secondLevelReply, keySecondLevelReply) => (
                      <NoteSingle key={keySecondLevelReply} {...secondLevelReply} reply={true} />
                    ))}

                    {item.replies.length !== item.repliesTotal && (
                      <Button
                        extraClass="link"
                        onClick={handleViewChildReplies}
                        text={intl.formatMessage(
                          { id: 'toolkit.comments.number.replies' },
                          { value: item.repliesTotal - item.replies.length }
                        )}
                      />
                    )}
                  </div>
                </>
              )}
            </React.Fragment>
          ))}

          {replies.length !== repliesTotal && (
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
  thumb,
  name,
  date,
  text,
  images,
  files,
  preview,
  reply = false,
  createCommentArgs,
}: NoteSingleProps) => {
  const intl: IntlShape = useIntl();
  const inputEl = useRef(null);
  const [isReply, setIsReply] = useState(false);

  const handleReply = () => {
    setIsReply(!isReply);
  };

  useEffect(() => {
    console.log(inputEl);
    // if (isReply) {
    //   inputEl.current.focus();
    // }
  }, [isReply]);

  return (
    <div className="view-comment__note">
      <div className="view-comment__header">
        <ProfileAvatar
          thumb={thumb}
          name={name}
          date={dateDistance({ date, formatMessage: intl.formatMessage })}
          thumbSize="lg"
        />

        <Dropdown
          items={[
            {
              id: 0,
              leftIcon: 'Trash',
              text: intl.formatMessage({ id: 'delete' }),
              onClick: () => {},
            },
          ]}
          toggleIcon="MoreVertical"
        />
      </div>

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
        (preview.type === 'image' ? (
          <FileCard url={preview.url} title={preview.title} />
        ) : (
          <Preview
            hover
            type="video"
            videoDetails={preview.videoDetails}
            videoUrl={preview.videoUrl}
            handleClickPreview={() => window.open(preview.videoUrl)}
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
            handleCleanComment={() => setIsReply(false)}
            reference={inputEl}
            placeholderText={intl.formatMessage({ id: 'commentHere' })}
          />
        )}
      </>
    </div>
  );
};
