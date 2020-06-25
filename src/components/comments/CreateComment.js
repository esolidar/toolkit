import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const CreateComment = (props) => {
  const {
    comment, env, translateMessage, onSubmitComment, loadingNewComment, onChange,
  } = props;
  const userType = localStorage.user ? JSON.parse(localStorage.user).type : 'guest';
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
            {userType === 'guest'
              && <img src={`${env}/frontend/assets/no-image.png`} alt="guest" />}
            {userType === 'npo'
              && <img src={JSON.parse(localStorage.user).institution.thumbs.thumb} alt={JSON.parse(localStorage.user).institution.name} />}
            {userType === 'user'
              && <img src={JSON.parse(localStorage.user).thumbs.thumb} alt={JSON.parse(localStorage.user).name} />}
          </div>
          <textarea
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
  env: PropTypes.string.isRequired,
  translateMessage: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loadingNewComment: PropTypes.bool.isRequired,
};
