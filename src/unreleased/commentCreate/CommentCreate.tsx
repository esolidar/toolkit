import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import ProfileAvatar from '../../components/profileAvatar';
import Button from '../../elements/button';
import TextareaField from '../../elements/textareaField';
import Props from './CommentCreate.types';

const CommentCreate: FC<Props> = ({
  placeholder = 'toolkit.comment.create',
  userThumb,
  onSubmitComment,
  id,
  textAreaId,
  startsHidden = false,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmitComment = e => {
    e.preventDefault();
    onSubmitComment(comment);
  };

  const handleOnChange = e => {
    if (error !== '') setError('');
    setComment(e.target.value);
  };

  const addMessage = e => {
    if (e.keyCode === 13 && e.shiftKey === false) handleSubmitComment(e);
  };

  return (
    <>
      <div
        id={id}
        className={`comment-create ${error ? 'error' : ''}`}
        style={{ display: startsHidden ? 'none' : 'flex' }}
        data-testid="comment-create"
      >
        <ProfileAvatar thumb={userThumb} thumbSize="md" />
        <TextareaField
          field="text"
          id={textAreaId}
          resize={true}
          className="comment-create__textarea"
          onChange={handleOnChange}
          placeholder={intl.formatMessage({ id: placeholder })}
          value={comment}
          dataTestId="text"
          onKeyDown={addMessage}
        />
        <Button
          extraClass="link"
          className="comment-create__submit"
          onClick={handleSubmitComment}
          text={intl.formatMessage({ id: 'projects.comments.send' })}
          disabled={comment.length === 0}
        />
      </div>
      {error && <span className="error-label">{error}</span>}
    </>
  );
};

export default CommentCreate;
