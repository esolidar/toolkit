import React, { useEffect, useState, useRef, FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Button from '../../../elements/button';
import CreateComment from '../create/CreateComment';
import DeleteModal from '../../../components/modals/deleteModal';
import Dropdown from '../../../elements/dropdown';
import FileCard from '../../../components/fileCard';
import ImageGrid from '../../../components/imageGrid';
import Preview from '../../../components/preview';
import ProfileAvatar from '../../../components/profileAvatar';
import ReadMoreText from '../../../components/readMoreText';
import dateDistance from '../../../utils/dateDistance';
import { NoteSingle } from '../../note';
import Props from './ViewComment.types';
import Icon from '../../../elements/icon';
import ShareModal from '../../../components/shareModal';

const ViewComment: FC<Props> = ({
  isAdmin,
  id,
  user_id: commentUserId,
  user: {
    id: userId,
    name,
    thumbs: { thumb },
  },
  created_at: date,
  text,
  images,
  files,
  // liked = false,
  likes = 0,
  comments = 0,
  replies = [],
  replies_count: repliesCount,
  // eslint-disable-next-line camelcase
  scraping_data,
  createCommentArgs,
  handleDeleteComment,
  handleViewAllReplies,
}: Props) => {
  const preview = JSON.parse(scraping_data);
  const intl: IntlShape = useIntl();
  const inputEl = useRef(null);
  const deleteNoteId = useRef(null);
  const [cleanTagText, setCleanTagText] = useState();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  // const [isLiked, setIsLiked] = useState(liked);
  const [showShare, setShowShare] = useState(false);

  // useEffect(() => {
  //   setIsLiked(liked);
  // }, [liked]);

  // const handleLiked = () => {
  //   setIsLiked(!isLiked);
  // };

  const handleFocus = () => {
    inputEl.current.focus();
  };

  // Transform tag text !@firstname lastname! to @name lastname
  useEffect(() => {
    if (text) {
      const matches = text.match(/!@.+?!/g);
      const matchesUrl = text.match(/#http.+?#/g);

      if (matches)
        setCleanTagText(
          text.replace(
            matches,
            `<span class="view-comment__note__tag">${matches[0].slice(1, -1)}</span>`
          )
        );
      else if (matchesUrl)
        setCleanTagText(
          text.replace(
            matchesUrl,
            `<span class="view-comment__note__url">${matchesUrl[0].slice(1, -1)}</span>`
          )
        );
      else setCleanTagText(text);
    }
  }, [text]);

  return (
    <>
      <div className="view-comment view-comment--border">
        <div className="view-comment__header">
          <ProfileAvatar
            thumb={thumb}
            name={name}
            date={dateDistance({
              date: new Date(date),
              formatMessage: intl.formatMessage,
              i18n: intl.locale,
            })}
            thumbSize="lg"
          />

          {(createCommentArgs?.user?.id === commentUserId || isAdmin) && (
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

        <div className="view-comment__content">
          {cleanTagText && <ReadMoreText text={cleanTagText} charLimit={512} gradient={true} />}
        </div>

        {images && images.length > 0 && (
          <ImageGrid items={images} type="grid" editMode={false} onDeleteImage={() => {}} />
        )}

        {files &&
          files.length > 0 &&
          files.map(({ name, file_size: size, file }, key) => (
            <FileCard key={key} size={size} title={name} file={file} showDownloadButton />
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

        <div className="view-comment__social view-comment--inline">
          <div>{intl.formatMessage({ id: 'toolkit.comments.like' }, { value: likes })}</div>
          <div>{intl.formatMessage({ id: 'toolkit.comments.comment' }, { value: comments })}</div>
        </div>
        <div className="view-comment__line" />
        <div className="view-comment--inline">
          {/* <Button
            onClick={handleLiked}
            extraClass={isLiked ? 'secondary view-comment--liked' : 'secondary'}
            ghost
            theme="dark"
            text={intl.formatMessage({ id: 'like' })}
            iconLeft={<Icon name={isLiked ? 'ThumbsUpBold' : 'ThumbsUp'} />}
          /> */}
          <Button
            dataTestId="comment"
            onClick={handleFocus}
            extraClass="secondary"
            ghost
            theme="dark"
            text={intl.formatMessage({ id: 'comment' })}
            iconLeft={<Icon name="Comment" />}
          />
          <Button
            dataTestId="share"
            onClick={() => setShowShare(true)}
            extraClass="secondary"
            ghost
            theme="dark"
            text={intl.formatMessage({ id: 'share' })}
            iconLeft={<Icon name="Share3" />}
          />
        </div>

        {replies?.length > 0 && (
          <>
            {replies.map((item, key) => (
              <React.Fragment key={key}>
                <NoteSingle
                  type="comment"
                  isAdmin={isAdmin}
                  note={item}
                  handleDeleteNote={handleDeleteComment}
                  parentComment={{ parentId: item.id, parentName: `@${item.user.name} ` }}
                  createCommentArgs={{ ...createCommentArgs, isEditMode: true }}
                  reply={true}
                />
              </React.Fragment>
            ))}

            {replies.length !== repliesCount && (
              <Button
                dataTestId={`view-allReplies${id}`}
                extraClass="link"
                onClick={() => handleViewAllReplies(id)}
                text={intl.formatMessage({ id: 'toolkit.comments.view.replies' })}
              />
            )}
          </>
        )}

        <CreateComment
          {...createCommentArgs}
          reference={inputEl}
          placeholderText={intl.formatMessage({ id: 'commentHere' })}
        />

        {(userId === commentUserId || isAdmin) && (
          <DeleteModal
            isOpen={isOpenDeleteModal}
            onClickDelete={() => {
              handleDeleteComment(deleteNoteId.current);
              setIsOpenDeleteModal(false);
              deleteNoteId.current = null;
            }}
            onClickCancel={() => {
              setIsOpenDeleteModal(false);
            }}
            title={intl.formatMessage({ id: 'toolkit.comments.delete.title' })}
            bodyText={
              userId === commentUserId
                ? intl.formatMessage({
                    id: 'toolkit.comments.delete.description',
                  })
                : intl.formatMessage(
                    {
                      id: 'toolkit.comments.admin.delete.description',
                    },
                    { username: name }
                  )
            }
          />
        )}
      </div>

      <ShareModal
        openModal={showShare}
        title="a"
        windowLocationHref="url"
        showFacebook
        showTwitter
        showLinkedin
        showEmail
        showWhatsapp
        showCopyToClipboard
        stickToBottomMobile
        onCloseModal={() => setShowShare(false)}
        onClickCopyToClipboard={() => {}}
      />
    </>
  );
};

export default ViewComment;
