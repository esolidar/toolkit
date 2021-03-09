/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'react-bootstrap';
import { injectIntl } from 'react-intl';
import AsyncPaginate from 'react-select-async-paginate';
import TextField from '../../elements/textField';
import TextareaField from '../../elements/textareaField';
import SelectField from '../../elements/selectField';
import DropZoneBox from '../../elements/dropZoneBox';
import Button from '../../elements/button';
import Loading from '../loading';
import CustomModal from '../../elements/customModal';

const mapFeatures = {
  auctions: '2',
  crowdfunding: '4',
  tickets: '16',
};

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
  onDrop,
  removeFile,
  showFeaturesOptions,
  featureDefault,
  features,
  auctionDefault,
  loadOptionsAuctions,
  updateValueAuctions,
  typeDefault,
  types,
  loadOptionsUsers,
  updateValueUsers,
  showModalSimpleFiles,
  toggleModalSimpleFiles,
  assignedDefault,
  disabledAssignedSelect,
  disabledFeatureSelect,
  disabledTypeSelect,
  disabledStatusSelect,
  crowdfundingDefault,
  institutionDefault,
  loadOptionsCrowdfunding,
  loadOptionsInstitution,
  updateValueCrowdfunding,
  updateValueInstitution,
  errorMessages,
  maxSize,
  updloadFileIsLoading,
}) => {
  const renderUploadedFiles = files => {
    if (files.length > 0) {
      return files.map((file, index) => (
        <div key={index} className="attachments-row">
          {file.name ? (
            <a
              href={file.file}
              className="download-file"
              rel="noopener noreferrer"
              target="_blank"
              title={decodeURI(file.name)}
            >
              {decodeURI(file.name)}
            </a>
          ) : (
            <a
              className="download-file"
              rel="noopener noreferrer"
              target="_blank"
              title={decodeURI(file.file.name)}
            >
              {decodeURI(file.file.name)}
            </a>
          )}
          <button type="button" className="remove-file" onClick={e => removeFile(e, file)}>
            x
          </button>
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
      return files.map(file => {
        const isImage = file.file_type === 'jpg' ? file.file : 'no-image';
        return (
          <div key={file.id} className="form-group thumb-box">
            <label className="checkbox-label">
              <div className="file-thumb form-group" style={{ backgroundImage: `url(${isImage})` }}>
                <input
                  type="checkbox"
                  name="user"
                  checked={!!file.checked}
                  value={file.id}
                  onChange={e => onChangeFile(e, file)}
                />
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
    <>
      <div>
        {!showCommentForm ? (
          <Card className="ticketCard">
            <Card.Body>
              <Row>
                {showFeaturesOptions && (
                  <Col sm={12} className="noPadding">
                    <Col sm={12}>
                      <SelectField
                        value={featureDefault}
                        onChange={onChange}
                        field="feature_id"
                        label={intl.formatMessage({
                          id: 'tickets.feature',
                          defaultMessage: 'Feature',
                        })}
                        options={features}
                        error={errors.feature_id}
                        required={true}
                        disabled={disabledFeatureSelect}
                      />
                    </Col>
                    {featureDefault && (
                      <Col sm={12}>
                        <SelectField
                          defaultValue={typeDefault}
                          onChange={onChange}
                          field="type"
                          label={intl.formatMessage({ id: 'tickets.type', defaultMessage: 'Type' })}
                          options={types}
                          error={errors.type}
                          required={true}
                          disabled={disabledTypeSelect}
                        />
                      </Col>
                    )}
                    {featureDefault && featureDefault === mapFeatures.auctions && (
                      <Col sm={12}>
                        <div className="form-group">
                          <label className="control-label">
                            {intl.formatMessage({
                              id: 'tickets.auctions',
                              defaultMessage: 'Auctions',
                            })}
                          </label>
                          <AsyncPaginate
                            isClearable
                            defaultValue={auctionDefault}
                            cacheOptions
                            placeholder={intl.formatMessage({
                              id: 'tickets.search.byIdOrTitle',
                              defaultMessage: 'Search by title ou ID...',
                            })}
                            additional={defaultAdditional}
                            loadOptions={loadOptionsAuctions}
                            onChange={updateValueAuctions}
                          />
                          {errors.related_feature_id && (
                            <div className="has-error">
                              <span className="help-block">
                                {intl.formatMessage({
                                  id: 'form.required',
                                  defaultMessage: 'This field is required.',
                                })}
                              </span>
                            </div>
                          )}
                        </div>
                      </Col>
                    )}
                    {featureDefault && featureDefault === mapFeatures.crowdfunding && (
                      <Col sm={12}>
                        <div className="form-group">
                          <label className="control-label">
                            {intl.formatMessage({
                              id: 'tickets.crowdfunding',
                              defaultMessage: 'Crowdfunding',
                            })}
                          </label>
                          <AsyncPaginate
                            isClearable
                            defaultValue={crowdfundingDefault}
                            cacheOptions
                            placeholder={intl.formatMessage({
                              id: 'tickets.search.byIdOrTitle',
                              defaultMessage: 'Search by title ou ID...',
                            })}
                            additional={defaultAdditional}
                            loadOptions={loadOptionsCrowdfunding}
                            onChange={updateValueCrowdfunding}
                          />
                          {errors.related_feature_id && (
                            <div className="has-error">
                              <span className="help-block">
                                {intl.formatMessage({
                                  id: 'form.required',
                                  defaultMessage: 'This field is required.',
                                })}
                              </span>
                            </div>
                          )}
                        </div>
                      </Col>
                    )}
                    {featureDefault && featureDefault === mapFeatures.tickets && (
                      <Col sm={12}>
                        <div className="form-group">
                          <label className="control-label">
                            {intl.formatMessage({
                              id: 'tickets.institution',
                              defaultMessage: 'Institution',
                            })}
                          </label>
                          <AsyncPaginate
                            isClearable
                            value={institutionDefault}
                            cacheOptions
                            placeholder={intl.formatMessage({
                              id: 'tickets.search.byIdOrTitle',
                              defaultMessage: 'Search by title ou ID...',
                            })}
                            additional={defaultAdditional}
                            loadOptions={loadOptionsInstitution}
                            onChange={updateValueInstitution}
                          />
                          {errors.related_feature_id && (
                            <div className="has-error">
                              <span className="help-block">
                                {intl.formatMessage({
                                  id: 'form.required',
                                  defaultMessage: 'This field is required.',
                                })}
                              </span>
                            </div>
                          )}
                        </div>
                      </Col>
                    )}
                    {assignedDefault && featureDefault !== mapFeatures.tickets && (
                      <Col sm={12}>
                        <div className="form-group">
                          <label className="control-label">
                            {intl.formatMessage({
                              id: 'tickets.assigned',
                              defaultMessage: 'Assigned to',
                            })}
                          </label>
                          <AsyncPaginate
                            isClearable={!disabledAssignedSelect}
                            defaultValue={assignedDefault}
                            cacheOptions
                            placeholder={intl.formatMessage({
                              id: 'tickets.search',
                              defaultMessage: 'Search here...',
                            })}
                            additional={defaultAdditional}
                            loadOptions={loadOptionsUsers}
                            onChange={updateValueUsers}
                            isOptionDisabled={disabledAssignedSelect}
                          />
                          {errors.assignee_id && (
                            <div className="has-error">
                              <span className="help-block">
                                {intl.formatMessage({
                                  id: 'form.required',
                                  defaultMessage: 'This field is required.',
                                })}
                              </span>
                            </div>
                          )}
                        </div>
                      </Col>
                    )}
                  </Col>
                )}
                <Col sm={12}>
                  <TextField
                    label={intl.formatMessage({
                      id: 'project.tickets.title',
                      defaultMessage: 'Title',
                    })}
                    type="text"
                    onChange={onChange}
                    error={errors.title}
                    placeholder={intl.formatMessage({
                      id: 'project.tickets.titlePlaceholder',
                      defaultMessage: 'Title',
                    })}
                    defaultValue={editTicket.title}
                    field="title"
                    required={true}
                  />
                </Col>
                {!hideText && (
                  <Col sm={12}>
                    <div className="form-group">
                      <TextareaField
                        label={intl.formatMessage({
                          id: 'project.tickets.text',
                          defaultMessage: 'Description',
                        })}
                        error={errors.text}
                        placeholder={intl.formatMessage({
                          id: 'project.tickets.textPlaceholder',
                          defaultMessage: 'Enter your issue here.',
                        })}
                        onChange={onChange}
                        field="text"
                        value={editTicket.text}
                        message=""
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
                    label={intl.formatMessage({
                      id: 'project.tickets.status',
                      defaultMessage: 'Status',
                    })}
                    options={status}
                    error={errors.status}
                    required={true}
                    disabled={disabledStatusSelect}
                  />
                </Col>
                <Col sm={6}>
                  <SelectField
                    defaultValue={priorityDefault}
                    onChange={onChange}
                    field="priority"
                    label={intl.formatMessage({
                      id: 'project.tickets.priority',
                      defaultMessage: 'Priority',
                    })}
                    options={priority}
                    error={errors.priority}
                    required={true}
                  />
                </Col>
                {uploadedFiles.length > 0 && (
                  <Col sm={12}>
                    <div className="form-group">
                      <span htmlFor="status" className="control-label">
                        {intl.formatMessage({
                          id: 'project.tickets.files',
                          defaultMessage: 'Files',
                        })}
                      </span>
                      <div className="attachments-box">{renderUploadedFiles(uploadedFiles)}</div>
                    </div>
                  </Col>
                )}
                <Col sm={12} className="mt-3 d-flex align-items-center justify-content-end">
                  {showAddFilesButtton && (
                    <Button
                      extraClass="dark-full float-left"
                      onClick={toggleModalFiles}
                      text={intl.formatMessage({
                        id: 'project.tickets.addFiles',
                        defaultMessage: 'Add Files',
                      })}
                    />
                  )}
                  <Button
                    extraClass="success-full ml-auto"
                    onClick={onSubmit}
                    disabled={disabled}
                    text={intl.formatMessage({
                      id: 'Company.department.save',
                      defaultMessage: 'Save',
                    })}
                  />
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
                    label={intl.formatMessage({
                      id: 'project.tickets.text',
                      defaultMessage: 'Description',
                    })}
                    error={errors.text}
                    placeholder={intl.formatMessage({
                      id: 'project.tickets.textPlaceholder',
                      defaultMessage: 'Enter your issue here.',
                    })}
                    onChange={onChangeComment}
                    field="text"
                    message=""
                    required={true}
                    value={editTicket.text}
                  />
                </Col>
                {uploadedFiles.length > 0 && (
                  <Col sm={12}>
                    <div className="form-group">
                      <span htmlFor="status" className="control-label">
                        {intl.formatMessage({
                          id: 'project.tickets.files',
                          defaultMessage: 'Files',
                        })}
                      </span>
                      <div className="attachments-box">{renderUploadedFiles(uploadedFiles)}</div>
                    </div>
                  </Col>
                )}
                <Col sm={12} className="mt-3 d-flex align-items-center">
                  <Button
                    extraClass="dark-full mr-auto"
                    onClick={toggleModalFiles}
                    text={intl.formatMessage({
                      id: 'project.tickets.addFiles',
                      defaultMessage: 'Add Files',
                    })}
                  />
                  <Button
                    extraClass="dark mr-2"
                    onClick={addComment}
                    text={intl.formatMessage({
                      id: 'Company.department.cancel',
                      defaultMessage: 'Cancel',
                    })}
                  />
                  <Button
                    extraClass="success-full"
                    onClick={onSubmitComment}
                    text={intl.formatMessage({
                      id: 'Company.department.save',
                      defaultMessage: 'Save',
                    })}
                    disabled={disabled}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </div>
      <CustomModal
        actionsChildren={
          <Button
            extraClass="success-full"
            onClick={toggleModalFiles}
            text={intl.formatMessage({
              id: 'project.tickets.addFiles',
              defaultMessage: 'Add Files',
            })}
          />
        }
        bodyChildren={
          <>
            <DropZoneBox
              onSelect={onDrop}
              errorMessages={errorMessages}
              maxSize={maxSize}
              isLoading={updloadFileIsLoading}
            />
            <h5>
              {intl.formatMessage({
                id: 'document.files.modal.fileList',
                defaultMessage: 'File list',
              })}
            </h5>
            <TextField
              type="text"
              className="mb-3"
              onChange={searchFiles}
              placeholder={intl.formatMessage({
                id: 'project.tickets.searchFiles',
                defaultMessage: 'Pesquisar por nome',
              })}
              defaultValue={search}
              field="search"
            />
            <div className="files-list checkbox-inline">{renderFilesList(files, loadingFiles)}</div>
          </>
        }
        dividerBottom={true}
        dividerTop={true}
        onHide={toggleModalFiles}
        show={showModalFiles}
        size="lg"
        title={intl.formatMessage({ id: 'project.tickets.addFiles', defaultMessage: 'Add Files' })}
      />
      <CustomModal
        bodyChildren={
          <DropZoneBox
            onSelect={onDrop}
            errorMessages={errorMessages}
            maxSize={maxSize}
            isLoading={updloadFileIsLoading}
          />
        }
        dividerTop={true}
        onHide={toggleModalSimpleFiles}
        size="lg"
        show={showModalSimpleFiles}
        title={intl.formatMessage({
          id: 'tickets.modal.simpleFiles.title',
          defaultMessage: 'Add Attachment',
        })}
      />
    </>
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
  disabled: PropTypes.bool,
  hideText: PropTypes.bool,
  editTicket: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
  onDrop: PropTypes.func,
  removeFile: PropTypes.func,
  showFeaturesOptions: PropTypes.bool,
  featureDefault: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  features: PropTypes.array,
  assignedDefault: PropTypes.object,
  auctionDefault: PropTypes.object,
  loadOptionsAuctions: PropTypes.func,
  updateValueAuctions: PropTypes.func,
  typeDefault: PropTypes.string,
  types: PropTypes.array,
  loadOptionsUsers: PropTypes.func,
  updateValueUsers: PropTypes.func,
  showModalSimpleFiles: PropTypes.bool,
  toggleModalSimpleFiles: PropTypes.func,
  disabledAssignedSelect: PropTypes.func,
  disabledFeatureSelect: PropTypes.bool,
  disabledTypeSelect: PropTypes.bool,
  disabledStatusSelect: PropTypes.bool,
  crowdfundingDefault: PropTypes.object,
  institutionDefault: PropTypes.object,
  loadOptionsCrowdfunding: PropTypes.func,
  loadOptionsInstitution: PropTypes.func,
  updateValueCrowdfunding: PropTypes.func,
  updateValueInstitution: PropTypes.func,
  errorMessages: PropTypes.array,
  maxSize: PropTypes.number,
  updloadFileIsLoading: PropTypes.bool,
};

export default injectIntl(TicketsForm);
