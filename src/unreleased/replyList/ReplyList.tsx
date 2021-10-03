/* eslint-disable camelcase */
import React, { FC } from 'react';
import Props from './ReplyList.types';
import Reply from '../reply';

const ReplyList: FC<Props> = ({
  commentList,
  user,
  isLoggedIn,
  toggleLoginModal,
  onClickDeleteComment,
}: Props): JSX.Element => (
  <>
    {commentList.map(comment => (
      <Reply
        key={comment.id}
        comment={comment}
        onClickToggleLoginModal={toggleLoginModal}
        onClickDelete={onClickDeleteComment}
        profileAvatar={{
          thumb: comment.user.thumbs.thumb,
          name: comment.user.name,
          thumbSize: 'md',
        }}
        user={user}
        isLoggedIn={isLoggedIn}
        isReply
      />
    ))}
  </>
);

export default ReplyList;
