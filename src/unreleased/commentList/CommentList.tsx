/* eslint-disable camelcase */
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Props from './CommentList.types';
import Button from '../../elements/button';
import Comment from '../comment';
import CommentCreate from '../commentCreate';
import LoginToInteract from '../../components/loginToInteract/LoginToInteract';
import cursorFocus from '../../utils/cursorFocus';

const CommentList: FC<Props> = ({
  commentList,
  user,
  isLoggedIn,
  isResponseList = false,
  totalCommentsLength,
  toggleLoginModal,
  onClickLoadMoreComments,
  onClickLoadReplies,
  onClickDeleteComment,
  onSubmitComment,
}: Props): JSX.Element => {
  const intl = useIntl();

  const handleClickAddComment = () => {
    const el = document.getElementById('create-comment-input');
    cursorFocus(el);
  };

  return (
    <>
      {!isResponseList && !isLoggedIn && <LoginToInteract onClick={toggleLoginModal} />}
      {!isResponseList && isLoggedIn && (
        <CommentCreate
          userThumb={user.thumbs.thumb}
          onSubmitComment={onSubmitComment}
          textAreaId="create-comment-input"
        />
      )}
      {commentList.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onClickLoadReplies={onClickLoadReplies}
          onClickToggleLoginModal={toggleLoginModal}
          onClickDelete={onClickDeleteComment}
          onSubmitComment={onSubmitComment}
          profileAvatar={{
            thumb: comment.user?.thumbs.thumb || comment.company?.thumbs.thumb,
            name: comment.user?.name || comment.company?.name,
            thumbSize: 'md',
          }}
          user={user}
          isLoggedIn={isLoggedIn}
          isReply={isResponseList}
        />
      ))}
      {commentList.length < totalCommentsLength && (
        <Button
          extraClass="link"
          className="component-comment-list__button"
          onClick={onClickLoadMoreComments}
          text={intl.formatMessage({ id: 'toolkit.view.comments' })}
        />
      )}
      {isLoggedIn && commentList.length > 1 && !isResponseList && (
        <Button
          extraClass="link"
          className="component-comment-list__button"
          onClick={handleClickAddComment}
          text={intl.formatMessage({ id: 'toolkit.comment.write' })}
        />
      )}
    </>
  );
};

export default CommentList;
