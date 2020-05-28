/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const CommentPost = ({
  postId,
  onSubmit,
  onKeyDown,
  textareaValue,
  commentHereText,
  textareaOnChange,
  errors,
}) => {
  const lang = window.localStorage.lang ? window.localStorage.lang : 'pt';
  const enviarCommentImage = 'url(https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/enviar-comment.png)';
  const sendCommentImage = 'url(https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/send-comment.png)';
  const changeBgImage = lang !== 'en' ? enviarCommentImage : sendCommentImage;

  return (
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
                onKeyDown={(e) => onKeyDown(e, postId)}
              />
              <button type="submit" className="btn-comment-post-comment" style={{ backgroundImage: changeBgImage }} />
              {errors.text
                && <span className="error">{errors.text}</span>}
            </Col>
          </form>
        </div>
      </div>
    </Col>
  );
};

CommentPost.propTypes = {
  postId: PropTypes.number,
  onSubmit: PropTypes.func,
  onKeyDown: PropTypes.func,
  textareaValue: PropTypes.string,
  commentHereText: PropTypes.string,
  textareaOnChange: PropTypes.func,
  errors: PropTypes.array,
};

export default CommentPost;
