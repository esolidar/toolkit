/* eslint-disable camelcase */
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Button from '../../elements/button';
import Icon from '../../components/icon';
import ReadMoreText from '../../components/readMoreText';
import Props from './Comment.types';
import CommentHeader from '../commentHeader';

// TODO: fix buttons underline on hover
// TODO: testing

const Comment: FC<Props> = ({
  comment,
  onClickShowResponses,
  onClickShowCreateResponse,
  onClickDelete,
  profileAvatar,
  showCount = true,
  userId,
}: Props): JSX.Element => {
  const intl = useIntl();

  const {
    created_at,
    public: isPublic,
    highlighted,
    user_id,
    text,
    comment: commentText,
    id,
    responses_count,
  } = comment;

  return (
    <div className="component-comment">
      <CommentHeader
        onClickDelete={onClickDelete}
        profileAvatar={profileAvatar}
        createdDate={created_at}
        isPublic={isPublic === 1}
        isHighlighted={!!highlighted}
        isUserOwner={user_id === userId}
      />
      <div className="component-comment__body">
        <ReadMoreText
          text={text || commentText}
          readMoreTextTranslation={intl.formatMessage({
            id: 'readmore',
          })}
          readLessTextTranslation={intl.formatMessage({
            id: 'readLess',
          })}
        />
      </div>
      <div className="component-comment__footer">
        <Button
          extraClass="link"
          className="component-comment__footer--reply"
          onClick={() => onClickShowCreateResponse(id)}
          iconLeft={<Icon iconClass="icon-ic-comment" />}
          text={intl.formatMessage({ id: 'crowdfunding.comments.reply' })}
        />
        {showCount && (
          <Button
            extraClass="link"
            className="component-comment__footer--see-replies"
            onClick={() => onClickShowResponses(comment)}
            id={`comment-${id}`}
            text={intl.formatMessage({ id: 'toolkit.view.replies' }, { value: responses_count })}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
