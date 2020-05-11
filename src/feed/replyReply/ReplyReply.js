import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const ReplyReply = ({ response, replyCommentButton }) => (
  <div className="reply-response" id={`response-${response.id}`}>
    <button type="button" className="btn-reply-response" onClick={replyCommentButton}>
      <img
        src="https://static.esolidar.com/frontend/icons/ic-comment.svg"
        alt="reply"
      />
      <FormattedMessage
        id="feed.post.response.reply"
        defaultMessage="Reply"
      />
    </button>
  </div>
);

ReplyReply.propTypes = {
  replyCommentButton: PropTypes.func.isRequired,
  response: PropTypes.object,
};

export default ReplyReply;
