/* eslint-disable camelcase */
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Button from '../../elements/button';
import Icon from '../../components/icon';
import ReadMoreText from '../../components/readMoreText';
import Props from './Reply.types';
import CommentHeader from '../commentHeader';
import cursorFocus from '../../utils/cursorFocus/cursorFocus';

const Reply: FC<Props> = ({
  comment,
  onClickToggleLoginModal,
  onClickDelete,
  profileAvatar,
  user,
  isLoggedIn = false,
  isReply = false,
}: Props): JSX.Element => {
  const intl = useIntl();

  const { created_at, dateAdded, user_id, comment: text, id, comment_id } = comment;

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
        onClickDelete={() => onClickDelete(comment_id, id)}
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
      </div>
    </div>
  );
};

export default Reply;
