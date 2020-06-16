import React from 'react';
import PropTypes from 'prop-types';

const CommentContent = ({ comment }) => (
  <div className="content">
    {comment.comment.split('\n').map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ))}
  </div>
);

CommentContent.propTypes = {
  comment: PropTypes.object,
};

export default CommentContent;
