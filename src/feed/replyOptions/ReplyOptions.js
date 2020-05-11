/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown, DropdownButton, Modal, Row, Col,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const ReplyOptions = ({
  editPost,
  deletePost,
  showModalDelete,
  closeModal,
  confirmDelete,
  showModalUpdate,
  companyLogo,
  companyName,
  textareaText,
  textareaOnChange,
  errors,
  onChangCheckBox,
  asCompany,
  isLoading,
  onSubmit,
  response,
  commentCompanyId,
  role,
  loggedUserId,
}) => {
  let companyEdit;
  const companyId = localStorage.company ? JSON.parse(localStorage.company).id : '';

  if (commentCompanyId === companyId) {
    companyEdit = true;
  } else {
    companyEdit = false;
  }

  return (
    <div className="post-options-div">
      <Dropdown id="post-options" className="post-options post-options-dropdown">
        <DropdownButton alignRight className="post-options-dropdown" title="">
          {((+(response.as_company) === 1 && companyEdit) || response.user_id === loggedUserId)
            && (
              <Dropdown.Header>
                <button type="button" onClick={editPost}>
                  <FormattedMessage
                    id="feed.options.edit-response"
                    defaultMessage="Edit reply"
                  />
                </button>
              </Dropdown.Header>
            )}
          <Dropdown.Header>
            <button type="button" onClick={deletePost}>
              <FormattedMessage
                id="feed.options.delete-response"
                defaultMessage="Delete reply"
              />
            </button>
          </Dropdown.Header>
        </DropdownButton>
      </Dropdown>
      <Modal show={showModalDelete} onHide={closeModal} className="md-delete-employee">
        <Modal.Header closeButton>
          <Row>
            <Col xs={12}>
              <Modal.Title>
                <FormattedMessage
                  id="feed.delete.response.title"
                  defaultMessage="Detele reply"
                />
              </Modal.Title>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
              <p>
                <FormattedMessage
                  id="feed.delete.response.confirm"
                  defaultMessage="Are you sure do you want to delete reply?"
                />
              </p>
            </Col>
            <Col xs={12} className="text-center buttons-box">
              <button
                type="button"
                className="btn btn-confirm-remove-employee"
                onClick={closeModal}
              >
                <FormattedMessage
                  id="feed.delete.response.confirm.no"
                  defaultMessage="No"
                />
              </button>
              <button
                type="button"
                className="btn btn-cancel-remove-employee"
                onClick={confirmDelete}
              >
                <FormattedMessage
                  id="feed.delete.response.confirm.yes"
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
            <Col xs={12}>
              <Modal.Title>
                <FormattedMessage
                  id="feed.edit.response.title"
                  defaultMessage="Edit Reply"
                />
              </Modal.Title>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
              <div className="create-post-write">
                <Row>
                  <Col sm={12}>
                    <img alt="Thumb" className="thumb" src={companyLogo} />
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
                  <Col sm={12} className="text-right no-padding">
                    <div className="checkbox-inline">
                      {role !== 'null'
                        && (
                          <div className="form-group">
                            <label className="as-company">
                              <input
                                type="checkbox"
                                name="as_company"
                                value="1"
                                onChange={onChangCheckBox}
                                checked={+(asCompany) === 1}
                              />
                              <FormattedMessage
                                id="feed.post.create.as-company"
                                defaultMessage="As company"
                              />
                              <div className="checkbox" />
                            </label>
                          </div>
                        )}
                    </div>
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
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

ReplyOptions.propTypes = {
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showModalDelete: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  showModalUpdate: PropTypes.bool,
  companyLogo: PropTypes.string,
  companyName: PropTypes.string,
  textareaText: PropTypes.string,
  textareaOnChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  onChangCheckBox: PropTypes.func.isRequired,
  asCompany: PropTypes.string,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired,
  commentCompanyId: PropTypes.number.isRequired,
  role: PropTypes.string,
  loggedUserId: PropTypes.number.isRequired,
};

export default ReplyOptions;
