import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import { Dropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const CommentPost = ({
  postId,
  showCreateComment,
  onSubmit,
  role,
  companyLogo,
  postAsCompany,
  locale,
  postAsUser,
  textareaText,
  commentHereText,
  textareaOnChange,
  errors,
  user,
  company,
}) => {
  const getEmployeeName = (companyId, user) => {
    const workEmails = user ? user.work_email : [];
    if (companyId && workEmails.length > 0) {
      return find(workEmails, (employee) => employee.company_id === companyId) ? find(workEmails, (employee) => employee.company_id === companyId).name : `${user.firstName} ${user.lastName}`;
    }

    return `${user.firstName} ${user.lastName}`;
  };

  const addMessage = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      onSubmit(e);
    }
  };

  const enviarCommentImage = 'url(https://static.esolidar.com/frontend/assets/enviar-comment.png)';
  const sendCommentImage = 'url(https://static.esolidar.com/frontend/assets/send-comment.png)';
  const bgImage = { backgroundImage: locale !== 'en' ? enviarCommentImage : sendCommentImage };
  const companyId = company ? company.id : null;

  return (
    <div id={`post-${postId}`} className="col-sm-12 no-padding" onClick={showCreateComment} onKeyDown={showCreateComment}>
      <div className="comment-post">
        <div className="comment-post-write">
          <form onSubmit={onSubmit} method="post">
            <div className="row">
              <div className="col-sm-12">
                {role === 'null'
                  && (
                    <div
                      className="reply-as-company dropdown btn-group btn-group-post-options-dropdown"
                    >
                      <div className="reply-as-company-dropdown dropdown-toggle btn btn-default">
                        <img alt="Logo" className="user-thumb" src={companyLogo} />
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
                            data-post={postId}
                            type="button"
                          >
                            <img
                              alt="Thumb"
                              src={company ? company.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'}
                            />
                            {company ? company.name : ''}
                          </button>
                        </Dropdown.Item>

                        <Dropdown.Item header>
                          <button
                            onClick={postAsUser}
                            data-post={postId}
                            type="button"
                          >
                            <img
                              alt="Thumb"
                              src={user ? user.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'}
                            />
                            {getEmployeeName(companyId, user)}
                          </button>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                <textarea
                  style={bgImage}
                  type="text"
                  id={`text-${postId}`}
                  onKeyDown={addMessage}
                  name="text"
                  value={textareaText}
                  className="new-post"
                  placeholder={commentHereText}
                  onChange={textareaOnChange}
                />
                <button type="submit" className="visible-xs btn-comment-post">
                  <FormattedMessage
                    id="feed.post.send"
                    defaultMessage="send"
                  />
                </button>
                {errors.text
                  && <span className="error">{errors.text}</span>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CommentPost.propTypes = {
  postId: PropTypes.number.isRequired,
  showCreateComment: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  role: PropTypes.string,
  companyLogo: PropTypes.string,
  postAsCompany: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  postAsUser: PropTypes.func.isRequired,
  textareaText: PropTypes.string,
  commentHereText: PropTypes.string,
  textareaOnChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
  user: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired,
};

export default CommentPost;
