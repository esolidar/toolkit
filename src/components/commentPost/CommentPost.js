/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import TextareaField from '../../elements/textareaField/TextareaField';

const CommentPost = ({
  postId,
  onSubmit,
  textareaValue,
  commentHereText,
  textareaOnChange,
  errors,
  disabled,
}) => (
  <Col id={`post-${postId}`} sm={12} className="no-padding">
    <div className="comment-post-no-border d-block">
      <div className="comment-post-projects">
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(postId); }} method="post">
          <Col sm={12} className="pt-3">
            <TextareaField
              id={`text-reply-${postId}`}
              field={`reply-${postId}`}
              defaultValue={textareaValue}
              className="new-post background-post-comment w-100"
              placeholder={commentHereText}
              onChange={textareaOnChange}
              error={errors[`reply-${postId}`]}
              required={true}
            />
            <button type="submit" className="btn-esolidar btn-success-full float-right" disabled={disabled}>
              <FormattedMessage
                id="projects.comments.send"
                defaultMessage="Send"
              />
            </button>
            {errors.text
                && <span className="error">{errors.text}</span>}
          </Col>
        </form>
      </div>
    </div>
  </Col>
);

CommentPost.propTypes = {
  postId: PropTypes.number,
  onSubmit: PropTypes.func,
  textareaValue: PropTypes.string,
  commentHereText: PropTypes.string,
  textareaOnChange: PropTypes.func,
  errors: PropTypes.array,
  disabled: PropTypes.bool,
};

export default CommentPost;
