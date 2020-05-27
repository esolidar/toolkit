/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const CommentPost = ({
  postId,
  onSubmit,
  textareaValue,
  commentHereText,
  textareaOnChange,
  errors,
}) => (
  <Col id={`post-${postId}`} sm={12} className="no-padding">
    <div className="comment-post d-block">
      <div className="comment-post-write">
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(postId); }} method="post">
          <Col sm={12}>
            <textarea
              type="text"
              id={`text-${postId}`}
              name="text"
              value={textareaValue}
              className="new-post background-post-comment w-100"
              placeholder={commentHereText}
              onChange={(e) => textareaOnChange(e)}
            />
            <button type="submit" className="btn-comment-post-comment" />
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
};

export default CommentPost;
