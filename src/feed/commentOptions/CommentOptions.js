/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Dropdown, DropdownButton, Modal, Row, Col,
} from 'react-bootstrap';

const CommentOptions = ({
  comment,
  companyEdit,
  logeduser,
  editPost,
  deleteComment,
  showModalDelete,
  showModalUpdate,
  closeModal,
  confirmDelete,
  companyLogo,
  companyName,
  textareaText,
  textareaOnChange,
  errors,
  role,
  onChangCheckBox,
  as_company,
  isLoading,
  onSubmit,
}) => (
  <div className="post-options-div">
    {(((+(comment.as_company) === 1 && companyEdit) || comment.user_id === logeduser) || ((companyEdit) || comment.user_id === logeduser))
        && (
          <Dropdown id="post-options" className="post-options post-options-dropdown">
            <DropdownButton alignRight className="post-options-dropdown" title="">
              {((+(comment.as_company) === 1 && companyEdit) || comment.user_id === logeduser)
                && (
                  <Dropdown.Header>
                    <button
                      type="button"
                      onClick={editPost}
                    >
                      <FormattedMessage
                        id="feed.options.edit-comment"
                        defaultMessage="Edit comment"
                      />
                    </button>
                  </Dropdown.Header>
                )}
              {((companyEdit) || comment.user_id === logeduser)
                && (
                  <Dropdown.Header>
                    <button
                      type="button"
                      onClick={deleteComment}
                    >
                      <FormattedMessage
                        id="feed.options.delete-comment"
                        defaultMessage="Delete comment"
                      />
                    </button>
                  </Dropdown.Header>
                )}
            </DropdownButton>
          </Dropdown>
        )}
    <Modal show={showModalDelete} onHide={closeModal} className="md-delete-employee">
      <Modal.Header closeButton>
        <Row>
          <Col xs={12}>
            <Modal.Title>
              <FormattedMessage
                id="feed.delete.comment.title"
                defaultMessage="Detele comment"
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
                id="feed.delete.comment.confirm"
                defaultMessage="Are you sure do you want to delete this comment?"
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
                id="feed.delete.comment.confirm.no"
                defaultMessage="No"
              />
            </button>
            <button
              type="button"
              className="btn btn-cancel-remove-employee"
              onClick={confirmDelete}
            >
              <FormattedMessage
                id="feed.delete.comment.confirm.yes"
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
                id="feed.edit.comment.title"
                defaultMessage="Edit Comment"
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
                                checked={+(as_company) === 1}
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

CommentOptions.propTypes = {
  comment: PropTypes.array.isRequired,
  companyEdit: PropTypes.array.isRequired,
  logeduser: PropTypes.number.isRequired,
  editPost: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  showModalUpdate: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  companyLogo: PropTypes.string,
  companyName: PropTypes.string,
  textareaText: PropTypes.string,
  textareaOnChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
  role: PropTypes.string,
  onChangCheckBox: PropTypes.func.isRequired,
  as_company: PropTypes.number,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default CommentOptions;
