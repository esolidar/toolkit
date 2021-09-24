import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import ProfileAvatar from '../../components/profileAvatar';
import Button from '../../elements/button';
import TextareaField from '../../elements/textareaField';
import Props from './CommentCreate.types';

// TODO: testing

const CommentCreate: FC<Props> = ({
  placeholder = 'toolkit.create.comment',
  userThumb,
  onSubmitComment,
  id,
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
      <div className={`comment-create ${error ? 'error' : ''}`}>
        <ProfileAvatar thumb={userThumb} thumbSize="md" />
        <TextareaField
          field="text"
          id={id}
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
