import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'react-bootstrap';

const ReplyComment = ({
  onSubmit,
  comment,
  companyLogo,
  company,
  user,
  postAsCompany,
  postAsUser,
  textareaText,
  commentHereText,
  textareaOnChange,
  role,
  locale,
  errors,
}) => {
  const enviarCommentImage = 'url(https://static.esolidar.com/frontend/assets/enviar-comment.png)';
  const sendCommentImage = 'url(https://static.esolidar.com/frontend/assets/send-comment.png)';
  const bgImage = { backgroundImage: locale !== 'en' ? enviarCommentImage : sendCommentImage };

  const addMessage = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      onSubmit(e);
    }
  };

  const getEmployeeName = (companyId, user) => {
    const workEmails = user ? user.work_email : [];
    if (companyId && workEmails.length > 0) {
      return find(workEmails, (employee) => employee.company_id === companyId) ? find(workEmails, (employee) => employee.company_id === companyId).name : `${user.firstName} ${user.lastName}`;
    }
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <div className="reply-comment has-responses" id={`comment-${comment.id}`}>
      <div className={`post-comment post-comment-${comment.id}`}>
        <div className="box reply-comment-post col-sm-12">
          <form onSubmit={onSubmit} method="post">
            <div className="col-sm-12 no-padding">
              {role === 'null'
                && (
                  <div className="reply-as-company dropdown btn-group btn-group-post-options-dropdown">
                    <div className="reply-as-company-dropdown dropdown-toggle btn btn-default">
                      <img alt="Thumb" className="user-thumb" src={companyLogo} />
                    </div>
                  </div>
                )}
              {role !== 'null'
                && (
                  <Dropdown
                    id="reply-as-company"
                    className="reply-as-company post-options-dropdown"
                  >
                    <Dropdown.Toggle className="reply-as-company-dropdown">
                      <img alt="Logo" src={companyLogo} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item header>
                        <button
                          onClick={postAsCompany}
                          data-comment={comment.id}
                          type="button"
                        >
                          <img
                            alt="Thumb"
                            src={company.thumbs ? company.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'}
                          />
                          {company ? company.name : ''}
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item header>
                        <button onClick={postAsUser} data-comment={comment.id} type="button">
                          <img
                            alt="Thumb"
                            src={user.thumbs ? user.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'}
                          />
                          {getEmployeeName(company.id, user)}
                        </button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              <textarea
                style={bgImage}
                type="text"
                id={`textarea-${comment.id}`}
                name="text"
                value={textareaText}
                className="new-post"
                placeholder={commentHereText}
                onKeyDown={addMessage}
                onChange={textareaOnChange}
              />
              <button type="submit" className="visible-xs btn-reply-comment-mobile">
                <FormattedMessage
                  id="feed.post.send"
                  defaultMessage="send"
                />
              </button>
              {errors.text
                && <span className="error">{errors.text}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ReplyComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  companyLogo: PropTypes.string,
  company: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  postAsCompany: PropTypes.func.isRequired,
  postAsUser: PropTypes.func.isRequired,
  textareaText: PropTypes.string,
  commentHereText: PropTypes.string,
  textareaOnChange: PropTypes.func.isRequired,
  role: PropTypes.string,
  locale: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

export default ReplyComment;
