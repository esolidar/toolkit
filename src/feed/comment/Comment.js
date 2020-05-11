import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import Moment from 'react-moment';
import classnames from 'classnames';
import Truncate from 'react-truncate';
import { FormattedMessage } from 'react-intl';
import Loading from '../../components/loading/Loading';
import CommentOptions from '../commentOptions/CommentOptions';
import ReplyComment from '../replyComment/ReplyComment';

const Comment = ({
  comment,
  postCompanyId,
  readMore,
  readMoreText,
  responses,
  reply,
  toggleLines,
  replyText,
  showResponses,
  replyCommentButton,
  renderResponse,
}) => {
  if (!comment) {
    return (<Loading />);
  }

  const getEmployeeName = (companyId, user) => {
    const workEmails = user ? user.work_email : [];
    if (companyId && workEmails.length > 0) {
      return find(workEmails, (employee) => employee.company_id === companyId) ? find(workEmails, (employee) => employee.company_id === companyId).name : `${user.firstName} ${user.lastName}`;
    }

    return `${user.firstName} ${user.lastName}`;
  };

  const renderComment = () => (
    <div dangerouslySetInnerHTML={{ __html: comment.text }} />
  );

  const renderUpdatedText = () => (
    <div dangerouslySetInnerHTML={{ __html: comment.text }} />
  );

  const seeMoreResponses = () => {
    if (comment.responses_count > responses.length) {
      const remainComments = comment.responses_count - responses.length;
      return (
        <button
          type="button"
          className="btn-show-response"
          onClick={showResponses}
        >
          <FormattedMessage
            id="feed.seemore.responses"
            defaultMessage="See {value} replies"
            values={{ value: remainComments }}
          />
        </button>
      );
    }
  };

  let thumb;
  let userName;
  const lines = 3;
  let options;
  const loggedUser = localStorage.user ? JSON.parse(localStorage.user).id : '';
  if (comment.company) {
    if (+(comment.as_company) === 1) {
      thumb = comment.company.thumbs.thumb ? comment.company.thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
      userName = comment.company.name;
    } else if (comment.user_id === loggedUser) {
      const user = localStorage.user ? JSON.parse(localStorage.user) : {};
      thumb = localStorage.user ? JSON.parse(localStorage.user).thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
      userName = getEmployeeName(comment.as_company_id, user);
    } else {
      thumb = comment.user ? comment.user.thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
      userName = getEmployeeName(comment.as_company_id, comment.user);
    }
  } else if (+(comment.as_company) === 1) {
    thumb = localStorage.company ? JSON.parse(localStorage.company).thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
    userName = localStorage.company ? JSON.parse(localStorage.company).name : '';
  } else if (comment.user_id === loggedUser) {
    thumb = JSON.parse(localStorage.user).thumbs.thumb ? JSON.parse(localStorage.user).thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
    userName = getEmployeeName(comment.as_company_id, JSON.parse(localStorage.user));
  } else {
    thumb = comment.user ? comment.user.thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
    userName = getEmployeeName(comment.as_company_id, comment.user);
  }

  if ((comment.user_id === loggedUser && +(comment.as_company) === 0) || localStorage.role !== 'null') {
    options = true;
  } else {
    options = false;
  }

  return (
    <div className="comment" id={`comment-${comment.id}`}>
      <div className="col-sm-12 header">
        <img alt="thumb" className="thumb" src={thumb} />
        <div className="user-post">{userName}</div>
        <div className="status">
          <Moment utc fromNow ago>{comment.created_at}</Moment>
          {options
            && <CommentOptions comment={comment} postCompanyId={postCompanyId} />}
        </div>
      </div>
      <div
        className="comments-box"
      >
        <div
          className={classnames('col-sm-12 comment-text', { 'has-responses': responses > 0 || reply === true })}
        >
          <div className="comment-text-truncate">
            <div className={`before-update before-update-${comment.id}`}>
              <Truncate
                lines={readMore ? 0 : lines}
                ellipsis={(
                  <span>
                    <a href="#" className="readmore-link" onClick={toggleLines}>
                      {readMoreText}
                    </a>
                  </span>
                )}
              >
                {renderComment()}
              </Truncate>
            </div>
            <div className={`after-update after-update-${comment.id}`}>
              {renderUpdatedText()}
            </div>
            <div className="col-sm-12 no-padding">
              <button
                type="button"
                className="btn-reply-comment"
                onClick={replyCommentButton}
              >
                <img
                  src="https://static.esolidar.com/frontend/icons/ic-comment.svg"
                  alt="reply"
                />
                {replyText}
              </button>
            </div>
          </div>
          {seeMoreResponses()}
        </div>
        <div
          className={classnames('col-sm-12 comment-text', { 'has-responses': responses.length > 0 || reply === true })}
        >
          {renderResponse()}
        </div>
      </div>
      <div className="col-sm-12 no-padding margin-bottom-15">
        <ReplyComment comment={comment} postCompanyId={postCompanyId} />
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  responses: PropTypes.array.isRequired,
  reply: PropTypes.array.isRequired,
  toggleLines: PropTypes.func.isRequired,
  showResponses: PropTypes.func.isRequired,
  replyCommentButton: PropTypes.func.isRequired,
  renderResponse: PropTypes.func.isRequired,
  postCompanyId: PropTypes.number,
  readMore: PropTypes.bool,
  readMoreText: PropTypes.string,
  replyText: PropTypes.string,
};

export default Comment;
