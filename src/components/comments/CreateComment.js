import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const CreateComment = (props) => {
  const {
    comment, env, translateMessage, onSubmitComment, loadingNewComment, onChange, thumb,
  } = props;

  const addMessage = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      onSubmitComment(e);
    }
  };

  return (
    <div className="comments">
      <div className="create-comment">
        <div className="title">
          <FormattedMessage
            id="crowdfunding.create.comment"
            defaultMessage="Write a comment"
          />
        </div>
        <div className="textarea">
          <div className="thumb">
            <img src={thumb} alt="user-thumb" />
          </div>
          <textarea
            data-testid="create-comment"
            className="input"
            style={
              {
                backgroundImage: loadingNewComment ? `url(${env}/frontend/assets/loader.svg)` : (
                  translateMessage({ id: 'commentHere.image', defaultMessage: `url(${env}/frontend/assets/send-comment.png)` })
                ),
                backgroundSize: loadingNewComment ? '16px' : '48px',
                backgroundColor: 'transparent',
              }
            }
            name="comment"
            onChange={onChange}
            onKeyDown={addMessage}
            disabled={loadingNewComment}
            value={comment}
            placeholder={translateMessage({ id: 'commentHere', defaultMessage: 'Leave a comment' })}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateComment;

CreateComment.propTypes = {
  comment: PropTypes.string,
  env: PropTypes.object.isRequired,
  translateMessage: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loadingNewComment: PropTypes.bool.isRequired,
  thumb: PropTypes.string.isRequired,
};
