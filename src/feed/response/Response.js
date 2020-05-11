/* eslint-disable react/prop-types */
import React from 'react';
import find from 'lodash/find';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Truncate from 'react-truncate';
import ReplyOptions from '../replyOptions/ReplyOptions';
import ReplyReply from '../replyReply/ReplyReply';

const Response = ({
  response,
  updateResponse,
  postCompanyId,
  readMore,
  toggleLines,
}) => {
  const getEmployeeName = (companyId, user) => {
    const workEmails = user ? user.work_email : [];
    if (companyId && workEmails.length > 0) {
      return find(workEmails, (employee) => employee.company_id === companyId) ? find(workEmails, (employee) => employee.company_id === companyId).name : `${user.firstName} ${user.lastName}`;
    }

    return `${user.firstName} ${user.lastName}`;
  };

  const renderReply = () => (
    <div dangerouslySetInnerHTML={{ __html: response.text }} />
  );

  const renderUpdatedText = () => (
    <div dangerouslySetInnerHTML={{ __html: updateResponse.text }} />
  );

  let thumb;
  let userName;
  const lines = 3;
  let options;
  const loggedUser = localStorage.user ? JSON.parse(localStorage.user).id : '';

  if (response.company) {
    if (+(response.as_company) === 1) {
      thumb = response.company.thumbs.thumb ? response.company.thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
      userName = response.company.name;
    } else if (response.user_id === loggedUser) {
      const user = localStorage.user ? JSON.parse(localStorage.user) : {};
      thumb = JSON.parse(localStorage.user).thumbs.thumb ? JSON.parse(localStorage.user).thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
      userName = getEmployeeName(response.as_company_id, user);
    } else {
      thumb = response.user.thumbs.thumb ? response.user.thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
      userName = getEmployeeName(response.as_company_id, response.user);
    }
  } else if ((+response.as_company) === 1) {
    thumb = localStorage.company ? JSON.parse(localStorage.company).thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
    userName = localStorage.company ? JSON.parse(localStorage.company).name : '';
  } else if (response.user_id === JSON.parse(localStorage.user).id) {
    thumb = JSON.parse(localStorage.user).thumbs.thumb ? JSON.parse(localStorage.user).thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
    userName = getEmployeeName(response.as_company_id, JSON.parse(localStorage.user));
  } else {
    thumb = response.user.thumbs.thumb ? response.user.thumbs.thumb : 'https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/no-image.png';
    userName = getEmployeeName(response.as_company_id, response.user);
  }

  if ((response.user_id === loggedUser && +(response.as_company) === 0) || localStorage.role !== 'null') {
    options = true;
  } else {
    options = false;
  }
  const localStorageCompanyId = localStorage.company ? JSON.parse(localStorage.company).id : '';
  const commentCompanyId = response.company ? response.company.id : localStorageCompanyId;

  return (
    <div className="comment-box" id={`responseBox-${response.id}`}>
      <div className="header">
        <img alt="Thumb" className="thumb" src={thumb} />
        <div className="user-post">{userName}</div>
        <div className="status">
          <Moment utc fromNow ago>{response.created_at}</Moment>
          {options
            && <ReplyOptions response={response} postCompanyId={postCompanyId} commentCompanyId={commentCompanyId} />}
        </div>
      </div>
      <div className="comment-text">
        <div className={`before-update before-update-${response.id}`}>
          <Truncate
            lines={readMore ? 0 : lines}
            ellipsis={(
              <span>
                <a href="#" className="readmore-link" onClick={toggleLines}>
                  <FormattedMessage
                    id="feed.post.readmore"
                    defaultMessage="Read more"
                  />
                </a>
              </span>
            )}
          >
            {renderReply()}
          </Truncate>
        </div>
        <div className={`after-update after-update-${response.id}`}>
          {renderUpdatedText()}
        </div>
      </div>
      <ReplyReply response={response} />
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.object.isRequired,
  updateResponse: PropTypes.object.isRequired,
  toggleLines: PropTypes.func.isRequired,
  postCompanyId: PropTypes.number,
  readMore: PropTypes.number,
};

export default Response;
