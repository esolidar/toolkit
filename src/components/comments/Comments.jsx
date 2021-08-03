/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import CommentHeader from './CommentHeader';
import CommentContent from './CommentContent';
import { getEmployeeName } from '../../utils';
import Button from '../../elements/button';

const Comments = ({
  comments,
  deleteComment,
  deleteReply,
  env,
  user,
  requireLogin,
  onSubmitResponse,
  onChange,
  reply,
  laodingPostReply,
  loadMore,
  totalComments,
  loadingMoreComments,
  loadMoreComments,
  thumb,
  color,
  isLoggedIn,
}) => {
  const intl = useIntl();
  const [showTextArea, setShowTextArea] = useState(null);
  const [isShowResponsive, setIsShowResponsive] = useState(false);
  const [backgroundImageStyle, setBackgroundImageStyle] = useState(
    `url(${env}/frontend/assets/send-comment.png)`
  );

  useEffect(() => {
    if (window.innerWidth < 1025) {
      setIsShowResponsive(true);
    }
  }, []);

  useEffect(() => {
    if (laodingPostReply && !isShowResponsive) {
      setBackgroundImageStyle(`url(${env}/frontend/assets/loader.svg)`);
    } else if (localStorage.lang === 'pt' && !isShowResponsive) {
      setBackgroundImageStyle(`url(${env}/frontend/assets/enviar-comment.png)`);
    } else if (isShowResponsive || !laodingPostReply) {
      setBackgroundImageStyle('');
    }
  }, [laodingPostReply, isShowResponsive]);

  const showTextAreaClick = comment => {
    if (!isLoggedIn) requireLogin();
    else {
      setShowTextArea(comment.id);
      setTimeout(() => {
        document.getElementById(`textarea-${comment.id}`).focus();
      }, 100);
    }
  };

  const addMessage = (e, id, isResponsive) => {
    if (e.keyCode === 13 && e.shiftKey === false && !isResponsive) {
      onSubmitResponse(e, id);
    } else if (isResponsive) {
      onSubmitResponse(e, id);
    }
  };

  const renderCommentReplyes = replies => {
    if (replies) {
      return replies.map(reply => {
        let newThumb;
        let newName;
        if (reply.company && !reply.user) {
          if (reply.company) {
            newThumb = reply.company.thumbs.thumb;
            newName = reply.company.name;
          } else {
            newThumb = reply.as_company_response.thumbs.thumb;
            newName = reply.as_company_response.name;
          }
        } else if (reply.user.institution) {
          newThumb = reply.user.institution.thumbs.thumb;
          newName = reply.user.institution.sigla;
        } else {
          newThumb = reply.user.thumbs.thumb;
          newName = reply.company ? getEmployeeName(reply.company.id, reply.user) : reply.user.name;
        }

        return (
          <div key={reply.id} className="request-comment">
            <CommentHeader
              comment={reply}
              user={user}
              deleteComment={() =>
                deleteReply ? deleteReply(reply.id, reply.comment_id) : deleteComment(reply.id)
              }
              newThumb={newThumb}
              newName={newName}
            />
            <CommentContent comment={reply} />
          </div>
        );
      });
    }
  };

  const renderComments = () => {
    if (comments.length > 0) {
      return comments.map(comment => {
        let newThumb;
        let newName;
        if (comment.company && !comment.user) {
          if (comment.company) {
            newThumb = comment.company.thumbs.thumb;
            newName = comment.company.name;
          } else {
            newThumb = comment.as_company_response.thumbs.thumb;
            newName = comment.as_company_response.name;
          }
        } else if (comment.user.institution) {
          newThumb = comment.user.institution.thumbs.thumb;
          newName = comment.user.institution.sigla;
        } else {
          newThumb = comment.user.thumbs.thumb;
          newName = comment.company
            ? getEmployeeName(comment.company.id, comment.user)
            : comment.user.name;
        }

        return (
          <div key={comment.id} className="request-comment">
            <CommentHeader
              comment={comment}
              user={user}
              deleteComment={() => deleteComment(comment.id)}
              newThumb={newThumb}
              newName={newName}
            />
            <CommentContent comment={comment} />
            <div className="content-reply">
              <Button
                extraClass="link"
                onClick={() => showTextAreaClick(comment)}
                icon={<img alt="comment" src={`${env}/frontend/icons/ic-comment.svg`} />}
                text={intl.formatMessage({ id: 'crowdfunding.comments.reply' })}
                style={{ color }}
              />
              {showTextArea === comment.id && (
                <form onSubmit={onSubmitResponse} method="post">
                  <div className="add-reply">
                    <img src={thumb} alt="thumb" />
                    <textarea
                      className="input"
                      style={{
                        backgroundImage: backgroundImageStyle,
                        backgroundSize: laodingPostReply ? '16px' : '48px',
                      }}
                      name="reply"
                      id={`textarea-${comment.id}`}
                      onChange={onChange}
                      onKeyDown={e => addMessage(e, comment.id, false)}
                      value={reply}
                      disabled={laodingPostReply}
                      placeholder={intl.formatMessage({ id: 'commentHere' })}
                      maxLength="500"
                    />
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="mr-1 d-lg-none comment-reply"
                      onClick={e => addMessage(e, comment.id, true)}
                    />
                  </div>
                </form>
              )}
              {comment.totalReplies > 0 && (
                <div className="comment-replies">
                  {renderCommentReplyes(comment.replies)}
                  {comment.totalReplies - comment.replies.length > 0 && (
                    <div className="readmore-box text-center">
                      <button
                        type="button"
                        className="btn btn-read-more-comments"
                        onClick={() => loadMore(comment.id, comment.page)}
                      >
                        {laodingPostReply && <FormattedMessage id="loading" />}
                        {!laodingPostReply && <FormattedMessage id="readmore" />}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      });
    }

    return (
      <div className="text-center no-results">
        <FormattedMessage id="crowdfunding.no-comments" />
      </div>
    );
  };

  return (
    <div>
      {renderComments()}
      {comments.length < totalComments && (
        <div className="mx-auto col-sm-4">
          <Button
            className="btn-read-more-comments"
            extraClass="info"
            disabled={loadingMoreComments}
            onClick={loadMoreComments}
            text={
              loadingMoreComments
                ? intl.formatMessage({ id: 'loading' })
                : intl.formatMessage({ id: 'readmore' })
            }
          />
        </div>
      )}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  env: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  deleteReply: PropTypes.func,
  reply: PropTypes.string.isRequired,
  requireLogin: PropTypes.func.isRequired,
  onSubmitResponse: PropTypes.func.isRequired,
  laodingPostReply: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  totalComments: PropTypes.number,
  loadingMoreComments: PropTypes.bool,
  loadMoreComments: PropTypes.func.isRequired,
  thumb: PropTypes.string.isRequired,
  color: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

export default Comments;
