/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createRef } from 'react';
import find from 'lodash/find';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Dropdown, Row, Col } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import Dropzone from 'react-dropzone';

const CreatePost = ({
  showCreateComment,
  companyLogo,
  onSubmit,
  onDrop,
  role,
  postAsCompany,
  company,
  user,
  postAsUser,
  companyName,
  textareaText,
  commentHereText,
  textareaOnChange,
  textareaOnKeyDown,
  textareaOnPaste,
  errors,
  type,
  ogImage,
  deleteScrapterImage,
  deleteScrapter,
  title,
  description,
  ogDescription,
  domain,
  image,
  newImages,
  deleteImageGallery,
  infoPublicPostText,
  publicPost,
  onChangCheckBox,
  isLoading,
  publicPostHide,
}) => {
  const dropzoneRef = createRef();

  const onOpenClick = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const renderFiles = () => {
    if (image && image.length > 0) {
      return image.map((file) => {
        const image = file.thumbs.thumb;
        return (
          <div key={file.id} className="gallery-thumb">
            <img alt="Thumb" src={image} />
            <button
              type="button"
              className="btn-delete-image"
              data-image-id={file.id}
              onClick={deleteImageGallery}
            >
              x
            </button>
          </div>
        );
      });
    }
  };

  const renderLoader = () => {
    if (newImages && newImages.length > 0) {
      return newImages.map((file, index) => (
        <div key={index} className="gallery-loader-thumb">
          <img alt="Thumb" src={file} />
        </div>
      ));
    }
  };

  const getEmployeeName = (companyId, user) => {
    const workEmails = user ? user.work_email : [];
    if (companyId && workEmails.length > 0) {
      return find(workEmails, (employee) => employee.company_id === companyId) ? find(workEmails, (employee) => employee.company_id === companyId).name : `${user.firstName} ${user.lastName}`;
    }

    return `${user.firstName} ${user.lastName}`;
  };

  const companyId = company ? company.id : null;

  return (
    <div className="create-post">
      <div className="box" onClick={showCreateComment} onKeyDown={showCreateComment}>
        <div className="create-post-box">
          <img alt="Thumb" className="thumb" src={companyLogo} />
          <div className="comment-here">
            <FormattedMessage
              id="feed.post.comment.new"
              defaultMessage="Share ideas, suggestions or initiatives within your company here..."
            />
          </div>
        </div>
        <div className="create-post-write">
          <form onSubmit={onSubmit} method="post">
            <Dropzone
              ref={dropzoneRef}
              onDrop={onDrop}
              disableClick={true}
              accept="image/jpeg, image/png"
              noClick
              noKeyboard
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <Row>
                    <Col sm={12}>
                      {role === 'null'
                        && (
                          <div
                            className="create-post-as-company dropdown btn-group btn-group-post-options-dropdown"
                          >
                            <div
                              className="create-post-as-company-dropdown dropdown-toggle btn btn-default"
                            >
                              <img alt="Thumb" className="user-thumb" src={companyLogo} />
                            </div>
                          </div>
                        )}
                      {(role !== 'null' && type !== 'ticket')
                        && (
                          <Dropdown
                            id="create-post-as-company"
                            className="create-post-as-company post-options-dropdown"
                          >
                            <Dropdown.Toggle className="create-post-as-company-dropdown">
                              <img alt="Open" src={companyLogo} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Header>
                                <button
                                  onClick={postAsCompany}
                                  type="button"
                                >
                                  <img
                                    alt="Thumb"
                                    src={company ? company.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'}
                                  />
                                  {company ? company.name : ''}
                                </button>
                              </Dropdown.Header>

                              <Dropdown.Header>
                                <button onClick={postAsUser} type="button">
                                  <img
                                    alt="Thumb"
                                    src={user ? user.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'}
                                  />
                                  {getEmployeeName(companyId, user)}
                                </button>
                              </Dropdown.Header>
                            </Dropdown.Menu>
                          </Dropdown>
                        )}
                      {(role === 'admin' && type === 'ticket')
                        && (
                          <div
                            className="create-post-as-company dropdown btn-group btn-group-post-options-dropdown"
                          >
                            <div
                              className="create-post-as-company-dropdown btn btn-default"
                            >
                              <img
                                alt="Thumb"
                                src={user ? user.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'}
                              />
                            </div>
                          </div>

                        )}
                      <div className="company-name">
                        {(role === 'admin' && type === 'ticket') ? (
                          getEmployeeName(companyId, user)
                        ) : (
                          companyName
                        )}
                      </div>
                    </Col>
                    <Col sm={12} className="new-post-textarea">
                      <textarea
                        id="textarea-post"
                        name="text"
                        value={textareaText}
                        className="new-post"
                        placeholder={commentHereText}
                        onChange={textareaOnChange}
                        onKeyDown={textareaOnKeyDown}
                        onPaste={textareaOnPaste}
                      />
                      {errors.text
                        && <span className="error">{errors.text}</span>}
                    </Col>
                    <Col sm={12}>
                      {(type === 'share' || type === 'share_gallery')
                        && (
                          <div className="scrapter">
                            {ogImage
                              && (
                                <div className="image">
                                  <button type="button" className="close" onClick={deleteScrapterImage}>x</button>
                                  <img alt="Thumb" src={ogImage} />
                                </div>
                              )}
                            <div className="bottom-side">
                              <button type="button" className="close" onClick={deleteScrapter}>x</button>
                              {title
                                && (
                                  <h5>
                                    {title}
                                  </h5>
                                )}
                              {(description || ogDescription)
                                && (
                                  <div
                                    className="description"
                                  >
                                    {description || ogDescription}
                                  </div>
                                )}
                              {domain
                                && <div className="url">{domain}</div>}
                            </div>
                          </div>
                        )}
                    </Col>
                    <Col sm={12}>
                      {(image.length > 0 || newImages.length > 0)
                        ? (
                          <div>
                            <div className="gallery">
                              <div className="col-sm-12 gallery-review">
                                {renderFiles()}
                                {renderLoader()}
                              </div>
                            </div>
                          </div>
                        ) : null}
                    </Col>
                    <Col xs={4}>
                      <button className="btn btn-add-feed-image" type="button" onClick={onOpenClick}>
                        <img
                          alt="Thumb"
                          src="https://static.esolidar.com/frontend/icons/camera.svg"
                        />
                        +
                      </button>
                    </Col>
                    <Col xs={4} className="text-right">
                      <div className="checkbox-inline">
                        {(role !== 'null' && !publicPostHide)
                          && (
                            <div className="form-group">
                              <label className="public-post">
                                <input
                                  type="checkbox"
                                  name="public"
                                  value="1"
                                  onChange={onChangCheckBox}
                                  checked={publicPost === '1'}
                                />
                                <FormattedMessage
                                  id="feed.post.create.public"
                                  defaultMessage="Public"
                                />
                                <div className="checkbox" />
                              </label>
                              <img
                                alt="Help"
                                className="help-tooltip"
                                src="https://static.esolidar.com/frontend/icons/icon-faq.svg"
                                data-tip={infoPublicPostText}
                              />
                              <ReactTooltip />
                            </div>
                          )}
                      </div>
                    </Col>
                    <Col xs={4} className="text-right">
                      <button
                        type="submit"
                        className="btn btn-send-post"
                        disabled={isLoading}
                      >
                        <FormattedMessage
                          id="feed.post.create.new"
                          defaultMessage="Publish"
                        />
                      </button>
                    </Col>
                  </Row>
                </div>
              )}
            </Dropzone>
          </form>
        </div>
      </div>
    </div>
  );
};

CreatePost.propTypes = {
  showCreateComment: PropTypes.func.isRequired,
  companyLogo: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  role: PropTypes.string,
  postAsCompany: PropTypes.func.isRequired,
  company: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  postAsUser: PropTypes.func.isRequired,
  companyName: PropTypes.string.isRequired,
  textareaText: PropTypes.string,
  commentHereText: PropTypes.string,
  textareaOnChange: PropTypes.func.isRequired,
  textareaOnKeyDown: PropTypes.func.isRequired,
  textareaOnPaste: PropTypes.func.isRequired,
  errors: PropTypes.array,
  type: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  deleteScrapterImage: PropTypes.func.isRequired,
  deleteScrapter: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  ogDescription: PropTypes.string,
  domain: PropTypes.string,
  image: PropTypes.object.isRequired,
  newImages: PropTypes.object.isRequired,
  deleteImageGallery: PropTypes.func.isRequired,
  infoPublicPostText: PropTypes.string,
  publicPost: PropTypes.string,
  onChangCheckBox: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  publicPostHide: PropTypes.bool,
};

export default CreatePost;
