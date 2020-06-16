import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CommentHeader from './CommentHeader';
import CommentContent from './CommentContent';

const Comments = ({
  comments, deleteComment, showAlertMessage, getEmployeeName, env, user, requireLogin, onSubmit, status, onChange, reply, translateMessage,
}) => {
  const [showTextArea, setShowTextArea] = useState(null);

  const showTextAreaClick = (comment) => {
    const isLoggedIn = user || null;
    if (!isLoggedIn) {
      requireLogin;
    }
    if (isLoggedIn) {
      setShowTextArea(comment.id);
      setTimeout(() => {
        document.getElementById(`textarea-${comment.id}`).focus();
      }, 100);
    }
  };

  const addMessage = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      onSubmit(e);
    }
  };

  const renderComments = () => {
    if (comments.length > 0) {
      return comments.map((comment) => {
        let newThumb;
        let newName;
        if (comment.as_company === 1) {
          if (comment.company) {
            newThumb = comment.company.thumbs.thumb;
            newName = comment.company.name;
          } else {
            newThumb = comment.as_company_response.thumbs.thumb;
            newName = comment.as_company_response.name;
          }
        } else {
          newThumb = comment.user.thumbs.thumb;
          newName = getEmployeeName(comment.company.id, comment.user);
        }

        return (
          <div key={comment.id} className="request-comment">
            <CommentHeader comment={comment} deleteComment={deleteComment} newThumb={newThumb} newName={newName} />
            <CommentContent comment={comment} />
            <div className="content-reply">
              <button type="button" className="btn-add-comment-reply" onClick={() => showTextAreaClick(comment)}>
                <img
                  alt="comment"
                  src={`${env.img_cdn}/frontend/icons/ic-comment.svg`}
                />
                <FormattedMessage
                  id="charityneeds.request.comments.reply"
                  defaultMessage="Reply"
                />
              </button>
              {(showTextArea === comment.id)
                && (
                  <form onSubmit={onSubmit} method="post">
                    <div className="add-reply">
                      <img
                        src={newThumb}
                        alt="thumb"
                      />
                      <textarea
                        className="input"
                        style={{ backgroundImage: status ? `url(${env.img_cdn}/frontend/assets/loader.svg)` : (localStorage.lang === 'pt' ? `url(${env.img_cdn}/frontend/assets/enviar-comment.png)` : `url(${env.img_cdn}/frontend/assets/send-comment.png)`), backgroundSize: status ? '16px' : '48px' }}
                        name="comment"
                        id={`textarea-${comment.id}`}
                        onChange={onChange}
                        onKeyDown={addMessage}
                        value={reply}
                        disabled={status}
                        placeholder={translateMessage({ id: 'commentHere', defaultMessage: 'Comment here…' })}
                      />
                    </div>
                  </form>
                )}

              <div className="comment-replies">
                {renderCommentReplyes()}
                {totalComments - repliesLength > 0 && (
                  <div className="readmore-box text-center">
                    <button type="button" className="btn btn-read-more-comments" onClick={this.props.loadMore}>
                      {status
                        && (
                          <FormattedMessage
                            id="charityneeds.request.comments.loading"
                            defaultMessage="Loading ..."
                          />
                        )}
                      {!status && (
                        <FormattedMessage
                          id="charityneeds.request.comments.readmore"
                          defaultMessage="Read more"
                        />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="text-center no-results">
        <FormattedMessage
          id="charityneeds.request.comments.no-comments"
          defaultMessage="No comments"
        />
      </div>
    );
  };

  return (
    <div>
      {renderComments()}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  env: PropTypes.object.isRequired,
  user: PropTypes.object,
  deleteComment: PropTypes.func.isRequired,
  showAlertMessage: PropTypes.func.isRequired,
  getEmployeeName: PropTypes.func.isRequired,
};

export default Comments;
