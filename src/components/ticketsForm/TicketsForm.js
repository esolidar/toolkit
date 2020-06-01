import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Card, Modal,
} from 'react-bootstrap';
import { injectIntl } from 'react-intl';
import TextField from '../../elements/textField/TextField';
import TextareaField from '../../elements/textareaField/TextareaField';
import SelectField from '../../elements/selectField/SelectField';
import Button from '../button/Button';

const TicketsForm = ({
  errors,
  onSubmit,
  onChange,
  statusDefault,
  status,
  priorityDefault,
  priority,
  isLoading,
  hideText,
  editTicket,
  openModalFiles,
  intl,
  showAddFilesButtton,
  showModalFiles,
  toggleModalFiles,
  searchFiles,
  search,
  renderFilesList,
  onSubmitComment,
  onChangeComment,
  addComment,
  showCommentForm,
  uploadedFiles,
}) => {
  const renderUploadedFiles = (files) => {
    if (files.length > 0) {
      return files.map((file, index) => (
        <div className="document-row float-left pl-3" key={index}>
          <a href={file.file} className="download-file" rel="noopener noreferrer" target="_blank" title={decodeURI(file.name)}>
            {decodeURI(file.name)}
          </a>
        </div>
      ));
    }
  };

  return (
    <Row>
      <Col sm={12}>
        {!showCommentForm ? (
          <Card className="ticketCard">
            <Card.Body>
              <Row className="p-3">
                <Col md={12} className="company-box">
                  <Row>
                    <Col sm={12}>
                      <TextField
                        label={intl.formatMessage({ id: 'project.tickets.title', defaultMessage: 'Title' })}
                        type="text"
                        onChange={onChange}
                        error={errors.title}
                        placeholder={intl.formatMessage({ id: 'project.tickets.titlePlaceholder', defaultMessage: 'Title' })}
                        defaultValue={editTicket.title}
                        field="title"
                        required={true}
                      />
                    </Col>
                    {!hideText && (
                      <Col sm={12}>
                        <div className="form-group">
                          <TextareaField
                            label={intl.formatMessage({ id: 'project.tickets.text', defaultMessage: 'Description' })}
                            error={errors.text}
                            placeholder={intl.formatMessage({ id: 'project.tickets.textPlaceholder', defaultMessage: 'Enter your issue here.' })}
                            onChange={onChange}
                            field="text"
                            defaultValue={editTicket.text}
                            message=""
                            maxLength={100}
                            required={true}
                          />
                        </div>
                      </Col>
                    )}
                    <Col sm={6}>
                      <SelectField
                        defaultValue={statusDefault}
                        onChange={onChange}
                        field="status"
                        label={intl.formatMessage({ id: 'project.tickets.status', defaultMessage: 'Status' })}
                        options={status}
                        error={errors.status}
                        required={true}
                      />
                    </Col>
                    <Col sm={6}>
                      <SelectField
                        defaultValue={priorityDefault}
                        onChange={onChange}
                        field="priority"
                        label={intl.formatMessage({ id: 'project.tickets.priority', defaultMessage: 'Priority' })}
                        options={priority}
                        error={errors.priority}
                        required={true}
                      />
                    </Col>
                    {showAddFilesButtton && (
                      <Col sm={12}>
                        <Col sm={12}>
                          <Button
                            extraClass="dark-full float-left"
                            onClick={openModalFiles}
                            text={intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
                          />
                          {renderUploadedFiles(uploadedFiles)}
                        </Col>
                      </Col>
                    )}
                    <Col sm={12}>
                      <Row>
                        <Col sm={12} className="text-right">
                          <Button
                            extraClass="success-full"
                            onClick={onSubmit}
                            disabled={isLoading}
                            text={intl.formatMessage({ id: 'Company.department.save', defaultMessage: 'Save' })}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ) : (
          <Card className="ticketCard">
            <Card.Body>
              <Row>
                <Col sm={12}>
                  <TextareaField
                    label={intl.formatMessage({ id: 'project.tickets.text', defaultMessage: 'Description' })}
                    error={errors.text}
                    placeholder={intl.formatMessage({ id: 'project.tickets.textPlaceholder', defaultMessage: 'Enter your issue here.' })}
                    onChange={onChangeComment}
                    field="text"
                    message=""
                    maxLength={100}
                    required={true}
                  />
                </Col>
                <Col sm={12} className="mt-3 text-left">
                  <Button
                    extraClass="dark-full float-left"
                    onClick={toggleModalFiles}
                    text={intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
                  />
                  {renderUploadedFiles(uploadedFiles)}
                </Col>
                <Col sm={12}>
                  <Row>
                    <Col sm={12} className="text-right">
                      <Button
                        extraClass="dark-full mr-3"
                        onClick={addComment}
                        text={intl.formatMessage({ id: 'Company.department.cancel', defaultMessage: 'Cancel' })}
                        disabled={isLoading}
                      />
                      <Button
                        extraClass="success-full"
                        onClick={onSubmitComment}
                        text={intl.formatMessage({ id: 'Company.department.save', defaultMessage: 'Save' })}
                        disabled={isLoading}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Col>
      <Modal show={showModalFiles} onHide={toggleModalFiles} className="md-import-employees">
        <Modal.Header closeButton>
          <Modal.Title>
            {intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row header-import select-employees-list">
            <Col sm={12} className="border-top">
              <Button
                extraClass="success-full"
                onClick={toggleModalFiles}
                text={intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
              />
            </Col>
            <Col sm={12} className="checkbox-inline">
              <div className="search-modal-files">
                <TextField
                  type="text"
                  className="search-files"
                  onChange={searchFiles}
                  placeholder={intl.formatMessage({ id: 'project.tickets.searchFiles', defaultMessage: 'Pesquisar por nome' })}
                  defaultValue={search}
                  field="search"
                />
              </div>
            </Col>
          </div>
          <div className="files-list checkbox-inline">
            {renderFilesList()}
          </div>
        </Modal.Body>
      </Modal>
    </Row>
  );
};


TicketsForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  statusDefault: PropTypes.string,
  status: PropTypes.array,
  priorityDefault: PropTypes.string,
  priority: PropTypes.array,
  openModalFiles: PropTypes.func,
  isLoading: PropTypes.bool,
  hideText: PropTypes.bool,
  editTicket: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  intl: PropTypes.object,
  showAddFilesButtton: PropTypes.bool,
  showModalFiles: PropTypes.bool,
  toggleModalFiles: PropTypes.func,
  searchFiles: PropTypes.func,
  search: PropTypes.string,
  renderFilesList: PropTypes.func,
  onSubmitComment: PropTypes.func,
  onChangeComment: PropTypes.func,
  addComment: PropTypes.func,
  showCommentForm: PropTypes.bool,
  uploadedFiles: PropTypes.array,
};

export default injectIntl(TicketsForm);
