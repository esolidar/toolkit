/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Card, Modal,
} from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { injectIntl } from 'react-intl';
import AsyncPaginate from 'react-select-async-paginate';
import TextField from '../../elements/textField/TextField';
import TextareaField from '../../elements/textareaField/TextareaField';
import SelectField from '../../elements/selectField/SelectField';
import Button from '../button/Button';
import Loading from '../loading/Loading';

const dropzoneRef = createRef();

const TicketsForm = ({
  errors,
  onSubmit,
  onChange,
  statusDefault,
  status,
  priorityDefault,
  priority,
  disabled,
  hideText,
  editTicket,
  openModalFiles,
  intl,
  showAddFilesButtton,
  showModalFiles,
  toggleModalFiles,
  searchFiles,
  search,
  onSubmitComment,
  onChangeComment,
  addComment,
  showCommentForm,
  uploadedFiles,
  files,
  loadingFiles,
  onChangeFile,
  isLoadingUplod,
  onDrop,
  removeFile,
  showFeaturesOptions,
  featureDefault,
  features,
  loadOptionsCrowdfunding,
  updateValueCrowdfunding,
  typeDefault,
  types,
  loadOptionsUsers,
  updateValueUsers,
}) => {
  const renderUploadedFiles = (files) => {
    if (files.length > 0) {
      return files.map((file, index) => (
        <div key={index} className="attachments-row">
          <a href={file.file} className="download-file" rel="noopener noreferrer" target="_blank" title={decodeURI(file.name)}>
            {decodeURI(file.name)}
          </a>
          <button type="button" className="remove-file" onClick={(e) => removeFile(e, file)}>x</button>
        </div>
      ));
    }
  };

  const renderFilesList = (files, loadingFiles) => {
    if (loadingFiles) {
      return (
        <div className="loading-employees">
          <Loading />
        </div>
      );
    }

    if (files.length > 0) {
      return files.map((file) => {
        const isImage = file.file_type === 'jpg' ? file.file : 'no-image';
        return (
          <div key={file.id} className="form-group thumb-box">
            <label className="checkbox-label">
              <div className="file-thumb form-group" style={{ backgroundImage: `url(${isImage})` }}>
                <input type="checkbox" name="user" checked={!!file.checked} value={file.id} onChange={(e) => onChangeFile(e, file)} />
                <div className="checkbox" />
                <div className={file.file_type === 'jpg' ? 'thumb-box-hover' : 'thumb-box-file'}>
                  {decodeURI(file.name)}
                </div>
              </div>
            </label>
          </div>
        );
      });
    }
  };

  const defaultAdditional = {
    page: 1,
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
                            required={true}
                          />
                        </div>
                      </Col>
                    )}
                    {showFeaturesOptions && (
                      <Col sm={12} className="noPadding">
                        <Col sm={6}>
                          <SelectField
                            defaultValue={typeDefault}
                            onChange={onChange}
                            field="type"
                            label={intl.formatMessage({ id: 'tickets.type', defaultMessage: 'Type' })}
                            options={types}
                            error={errors.type}
                            required={true}
                          />
                        </Col>
                        <Col sm={6}>
                          <div className="form-group">
                            <label className="control-label">
                              {intl.formatMessage({ id: 'tickets.assigned', defaultMessage: 'Assigned to' })}
                            </label>
                            <AsyncPaginate
                              cacheOptions
                              placeholder={intl.formatMessage({ id: 'tickets.search', defaultMessage: 'Search here...' })}
                              additional={defaultAdditional}
                              loadOptions={loadOptionsUsers}
                              onChange={updateValueUsers}
                            />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <SelectField
                            defaultValue={featureDefault}
                            onChange={onChange}
                            field="feature_id"
                            label={intl.formatMessage({ id: 'tickets.feature', defaultMessage: 'Feature' })}
                            options={features}
                            error={errors.feature_id}
                            required={true}
                          />
                        </Col>
                        <Col sm={6}>
                          <div className="form-group">
                            <label className="control-label">Crowdfunding</label>
                            <AsyncPaginate
                              cacheOptions
                              placeholder={intl.formatMessage({ id: 'tickets.search', defaultMessage: 'Search here...' })}
                              additional={defaultAdditional}
                              loadOptions={loadOptionsCrowdfunding}
                              onChange={updateValueCrowdfunding}
                            />
                          </div>
                        </Col>
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
                    {(uploadedFiles.length > 0) && (
                      <Col sm={12}>
                        <div className="form-group">
                          <span htmlFor="status" className="control-label">
                            {intl.formatMessage({ id: 'project.tickets.files', defaultMessage: 'Files' })}
                          </span>
                          <div className="attachments-box">
                            {renderUploadedFiles(uploadedFiles)}
                          </div>
                        </div>
                      </Col>
                    )}
                    {showAddFilesButtton && (
                      <Col sm={12}>
                        <Button
                          extraClass="dark-full float-left"
                          onClick={openModalFiles}
                          text={intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
                        />
                      </Col>
                    )}
                    <Col sm={12}>
                      <Row>
                        <Col sm={12} className="text-right">
                          <Button
                            extraClass="success-full"
                            onClick={onSubmit}
                            disabled={disabled}
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
                    required={true}
                  />
                </Col>
                {(uploadedFiles.length > 0) && (
                <Col sm={12}>
                  <div className="form-group">
                    <span htmlFor="status" className="control-label">
                      {intl.formatMessage({ id: 'project.tickets.files', defaultMessage: 'Files' })}
                    </span>
                    <div className="attachments-box">
                      {renderUploadedFiles(uploadedFiles)}
                    </div>
                  </div>
                </Col>
                )}
                <Col sm={12} className="mt-3 text-left">
                  <Button
                    extraClass="dark-full float-left"
                    onClick={toggleModalFiles}
                    text={intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
                  />
                </Col>
                <Col sm={12}>
                  <Row>
                    <Col sm={12} className="text-right">
                      <Button
                        extraClass="dark-full mr-3"
                        onClick={addComment}
                        text={intl.formatMessage({ id: 'Company.department.cancel', defaultMessage: 'Cancel' })}
                      />
                      <Button
                        extraClass="success-full"
                        onClick={onSubmitComment}
                        text={intl.formatMessage({ id: 'Company.department.save', defaultMessage: 'Save' })}
                        disabled={disabled}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Col>
      <Modal show={showModalFiles} onHide={toggleModalFiles} className="md-import-employees import-files">
        <Modal.Header closeButton>
          <Modal.Title>
            <div style={{ paddingLeft: '10px' }}>
              {intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="header-import select-employees-list">
            <Col sm={12} className="upload-file">
              <Dropzone
                ref={dropzoneRef}
                onDrop={onDrop}
                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*, .doc, .docx,.ppt,.pptx,.txt,.xlsx,.zip"
              >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isLoadingUplod && (
                      <Loading />
                    )}
                    {!isLoadingUplod && (
                      <p>
                        {intl.formatMessage({
                          id: 'document.files.modal.drop',
                          defaultMessage: 'Drag and drop some files here, or click to select files',
                        })}
                        <br />
                        {errors.file && (
                          <span className="error">{errors.file}</span>
                        )}
                      </p>
                    )}
                  </div>
                )}
              </Dropzone>
            </Col>
            <Col sm={12} style={{ padding: '0' }}>
              <TextField
                type="text"
                className="search-files"
                onChange={searchFiles}
                placeholder={intl.formatMessage({ id: 'project.tickets.searchFiles', defaultMessage: 'Pesquisar por nome' })}
                defaultValue={search}
                field="search"
              />
            </Col>
            <Col sm={12} className="files-list checkbox-inline">
              {renderFilesList(files, loadingFiles)}
            </Col>
            <Col sm={12} className="border-top">
              <Button
                extraClass="success-full"
                onClick={toggleModalFiles}
                text={intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
              />
            </Col>
          </Row>
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
  disabled: PropTypes.bool,
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
  onSubmitComment: PropTypes.func,
  onChangeComment: PropTypes.func,
  addComment: PropTypes.func,
  showCommentForm: PropTypes.bool,
  uploadedFiles: PropTypes.array,
  files: PropTypes.array,
  loadingFiles: PropTypes.bool,
  onChangeFile: PropTypes.func,
  isLoadingUplod: PropTypes.bool,
  onDrop: PropTypes.func,
  removeFile: PropTypes.func,
  showFeaturesOptions: PropTypes.bool,
  featureDefault: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  features: PropTypes.array,
  auctionsList: PropTypes.array,
  auctionsSearchList: PropTypes.func,
  loadOptionsCrowdfunding: PropTypes.func,
  updateValueCrowdfunding: PropTypes.func,
  typeDefault: PropTypes.string,
  types: PropTypes.array,
  loadOptionsUsers: PropTypes.func,
  updateValueUsers: PropTypes.func,
};

export default injectIntl(TicketsForm);
