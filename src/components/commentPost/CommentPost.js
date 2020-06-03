/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

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
          <Col sm={12}>
            <textarea
              type="text"
              id={`text-comment-${postId}`}
              name="text"
              value={textareaValue}
              className="new-post background-post-comment w-100"
              placeholder={commentHereText}
              onChange={(e) => textareaOnChange(e)}
              maxLength={255}
            />
            <span className="small-text">
              <FormattedMessage
                id="projects.comments.maxlength"
                defaultMessage="Maximum 255 characters"
              />
            </span>
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
