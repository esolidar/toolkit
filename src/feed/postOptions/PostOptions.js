/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import {
  Dropdown, Modal, DropdownButton, Row, Col,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import Dropzone from 'react-dropzone';

const PostOptions = ({
  newImages,
  image,
  highlightPost,
  post,
  editPost,
  deletePost,
  showModalDelete,
  closeModal,
  confirmDelete,
  showModalUpdate,
  role,
  companyLogo,
  postAsCompany,
  company,
  postAsUser,
  user,
  companyName,
  textareaText,
  textareaOnChange,
  errors,
  type,
  ogImage,
  deleteScrapterImage,
  deleteScrapter,
  title,
  description,
  domain,
  onDrop,
  deleteImageGallery,
  onOpenClick,
  onChangCheckBox,
  publicPost,
  infoPublicPostText,
  isLoading,
  onSubmit,
}) => {
  const dropzoneRef = createRef();

  if (newImages.length > 0) {
    return newImages.map((file, index) => (
      <div key={index} className="gallery-loader-thumb">
        <img alt="Thumb" src={file} />
      </div>
    ));
  }

  const renderFiles = () => {
    if (image.length > 0) {
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
    if (newImages.length > 0) {
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

  return (
    <div className="post-options-div">
      <Dropdown id="post-options" className="post-options-dropdown post-options">
        <DropdownButton alignRight className="post-options-dropdown" title="">
          <Dropdown.Header>
            <button type="button" onClick={highlightPost}>
              {(post.highlighted === 0) && (
                <FormattedMessage
                  id="feed.options.highlight-post"
                  defaultMessage="Highlight post"
                />
              )}
              {(post.highlighted === 1) && (
                <FormattedMessage
                  id="feed.options.remove.highlight-post"
                  defaultMessage="Remove highlight post"
                />
              )}
            </button>
          </Dropdown.Header>
          {(post.as_company === 1 || post.user_id === user.id)
            && (
              <Dropdown.Header>
                <button type="button" onClick={editPost}>
                  <FormattedMessage
                    id="feed.options.edit-post"
                    defaultMessage="Edit post"
                  />
                </button>
              </Dropdown.Header>
            )}
          <Dropdown.Header>
            <button type="button" onClick={deletePost}>
              <FormattedMessage
                id="feed.options.delete-post"
                defaultMessage="Delete post"
              />
            </button>
          </Dropdown.Header>
        </DropdownButton>
      </Dropdown>
      <Modal show={showModalDelete} onHide={closeModal} className="md-delete-employee">
        <Modal.Header closeButton>
          <Row>
            <Col sm={12}>
              <Modal.Title>
                <FormattedMessage
                  id="feed.delete.post.title"
                  defaultMessage="Detele Post"
                />
              </Modal.Title>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12}>
              <p>
                <FormattedMessage
                  id="feed.delete.post.confirm"
                  defaultMessage="Are you sure do you want to delete post?"
                />
              </p>
            </Col>
            <Col sm={12} className="text-center buttons-box">
              <button
                type="button"
                className="btn btn-confirm-remove-employee"
                onClick={closeModal}
              >
                <FormattedMessage
                  id="feed.delete.post.confirm.no"
                  defaultMessage="No"
                />
              </button>
              <button
                type="button"
                className="btn btn-cancel-remove-employee"
                onClick={confirmDelete}
              >
                <FormattedMessage
                  id="feed.delete.post.confirm.yes"
                  defaultMessage="Yes"
                />
              </button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Modal show={showModalUpdate} onHide={closeModal} className="md-delete-employee">
        <Modal.Header closeButton>
          <Row>
            <Col sm={12}>
              <Modal.Title>
                <FormattedMessage
                  id="feed.edit.post.title"
                  defaultMessage="Edit Post"
                />
              </Modal.Title>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12}>
              <div className="create-post-write">
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
                  {role !== 'null'
                    && (
                      <Dropdown
                        id="edit-post-as-company"
                        className="create-post-as-company post-options-dropdown"
                      >
                        <Dropdown.Toggle className="create-post-as-company-dropdown">
                          <img alt="Thumb" src={companyLogo} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item header>
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
                          </Dropdown.Item>

                          <Dropdown.Item header>
                            <button onClick={postAsUser} type="button">
                              <img
                                alt="Thumb"
                                src={user ? user.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'}
                              />
                              {getEmployeeName(company.id, user)}
                            </button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    )}
                  <div className="company-name">
                    {companyName}
                  </div>
                </Col>
                <Col sm={12}>
                  <textarea
                    id="textarea-post"
                    name="text"
                    value={textareaText}
                    className="edit-post"
                    placeholder="Escreva aqui o texto"
                    onChange={textareaOnChange}
                  />
                  {errors.text
                    && <span className="error">{errors.text}</span>}
                </Col>
                {(type === 'share' || type === 'share_gallery')
                  && (
                    <Col sm={12}>
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
                          {description
                            && <div className="description">{description}</div>}
                          {domain
                            && <div className="url">{domain}</div>}

                        </div>
                      </div>
                    </Col>
                  )}
                {(type === 'gallery' || type === 'share_gallery')
                  && (
                    <Col sm={12}>
                      <Dropzone
                        ref={dropzoneRef}
                        onDrop={onDrop}
                        accept="image/jpeg, image/png"
                        noClick
                        noKeyboard
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <div className="gallery">
                              {(image.length > 0 || newImages.length > 0)
                                ? (
                                  <div>
                                    <Col sm={12} className="gallery-review">
                                      <div>
                                        {renderFiles()}
                                      </div>
                                      <div>
                                        {renderLoader()}
                                      </div>
                                    </Col>
                                  </div>
                                ) : null}
                            </div>
                          </div>
                        )}
                      </Dropzone>
                    </Col>
                  )}
                <Col sm={12}>
                  <Row>
                    <Col sm={4}>
                      {(post.type === 'gallery' || post.type === 'share_gallery')
                        && (
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
                                <button
                                  className="btn btn-add-feed-image"
                                  type="button"
                                  onClick={onOpenClick}
                                >
                                  <img
                                    alt="Thumb"
                                    src="https://static.esolidar.com/frontend/icons/camera.svg"
                                  />
                                  +
                                </button>
                              </div>
                            )}
                          </Dropzone>
                        )}
                    </Col>
                    <Col sm={4} className="text-right">
                      <div className="checkbox-inline">
                        {role !== 'null'
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
                                alt="Info"
                                className="help-tooltip"
                                src="https://static.esolidar.com/frontend/icons/icon-faq.svg"
                                data-tip={infoPublicPostText}
                              />
                              <ReactTooltip />
                            </div>
                          )}
                      </div>
                    </Col>
                    <Col sm={4}>
                      <button
                        type="submit"
                        className="btn btn-send-post"
                        disabled={isLoading}
                        onClick={onSubmit}
                      >
                        <FormattedMessage
                          id="feed.post.update"
                          defaultMessage="Save"
                        />
                      </button>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

PostOptions.propTypes = {
  newImages: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  highlightPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  showModalUpdate: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  role: PropTypes.string,
  companyLogo: PropTypes.string,
  postAsCompany: PropTypes.func.isRequired,
  company: PropTypes.object.isRequired,
  postAsUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  companyName: PropTypes.string,
  textareaText: PropTypes.string,
  textareaOnChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  type: PropTypes.string,
  ogImage: PropTypes.string,
  deleteScrapterImage: PropTypes.func.isRequired,
  deleteScrapter: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  domain: PropTypes.string,
  onDrop: PropTypes.func.isRequired,
  deleteImageGallery: PropTypes.func.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  onChangCheckBox: PropTypes.func.isRequired,
  publicPost: PropTypes.string,
  infoPublicPostText: PropTypes.string,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default PostOptions;
