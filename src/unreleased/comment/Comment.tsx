/* eslint-disable camelcase */
import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import Button from '../../elements/button';
import Icon from '../../components/icon';
import ReadMoreText from '../../components/readMoreText';
import Props from './Comment.types';
import CommentHeader from '../commentHeader';
import CommentCreate from '../commentCreate';
import ReplyList from '../replyList';
import cursorFocus from '../../utils/cursorFocus/cursorFocus';

const Comment: FC<Props> = ({
  comment,
  onClickLoadReplies,
  onClickToggleLoginModal,
  onClickDelete,
  onSubmitComment,
  profileAvatar,
  user,
  isLoggedIn = false,
  isReply = false,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [showReplyList, setShowReplyList] = useState(false);

  const {
    created_at,
    dateAdded,
    user_id,
    comment: text,
    id,
    comment_id,
    responses_count,
    responses,
  } = comment;

  const handleClickShowReplies = () => {
    onClickLoadReplies(id, responses_count);
    setShowReplyList(true);
  };

  const handleClickReply = () => {
    if (!isLoggedIn) onClickToggleLoginModal();

    const idToUse = isReply ? comment_id : id;
    document.getElementById(`reply-comment-${idToUse}`).style.display = 'flex';

    setTimeout(() => {
      const el = document.getElementById(`reply-comment-${idToUse}-input`);
      cursorFocus(el);
    }, 100);
  };

  return (
    <div className="component-comment">
      <CommentHeader
        onClickDelete={() => onClickDelete(id)}
        profileAvatar={profileAvatar}
        createdDate={created_at || dateAdded}
        isUserOwner={user_id === user.id}
      />
      <div className="component-comment__body">
        <ReadMoreText
          text={text}
          readMoreTextTranslation={intl.formatMessage({
            id: 'readmore',
          })}
          readLessTextTranslation={intl.formatMessage({
            id: 'readLess',
          })}
        />
      </div>
      <div className="component-comment__footer">
        {isLoggedIn && (
          <Button
            extraClass="link"
            className="component-comment__footer--reply"
            onClick={handleClickReply}
            iconLeft={<Icon iconClass="icon-ic-comment" />}
            text={intl.formatMessage({ id: 'crowdfunding.comments.reply' })}
          />
        )}
        {responses_count > 0 && !isReply && !showReplyList && (
          <Button
            extraClass="link"
            className="component-comment__footer--see-replies"
            onClick={handleClickShowReplies}
            id={`comment-${id}`}
            text={intl.formatMessage({ id: 'toolkit.view.replies' }, { value: responses_count })}
          />
        )}
      </div>
      <div className="component-comment__replies">
        {showReplyList && responses && (
          <ReplyList
            commentList={responses}
            user={user}
            isLoggedIn={isLoggedIn}
            toggleLoginModal={onClickToggleLoginModal}
            onClickDeleteComment={onClickDelete}
          />
        )}
        {isLoggedIn && !isReply && (
          <CommentCreate
            userThumb={user.thumbs.thumb}
            onSubmitComment={comment => onSubmitComment(comment, id)}
            id={`reply-comment-${id}`}
            textAreaId={`reply-comment-${id}-input`}
            placeholder="toolkit.reply.create"
            startsHidden
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
