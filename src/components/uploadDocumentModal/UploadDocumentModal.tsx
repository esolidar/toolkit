import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import CustomModal from '../../elements/customModal';
import Button from '../../elements/button';
import TextField from '../../elements/textField';
import TextareaField from '../../elements/textareaField';
import DropZoneBox from '../../elements/dropZoneBox';
import InputLabel from '../../elements/inputLabel';
import Preview from '../preview';
import getEnvVar from '../../utils/getEnvVar';
import Props, { ModalBodyProps } from './UploadDocumentModal.types';

const DEFAULT_FORM = { id: null, name: '', summary: '', file: '', status: 1 };

const UploadDocumentModal: FC<Props> = ({
  openModal = false,
  form = DEFAULT_FORM,
  handlOnCloseModal,
  handleClickUpload,
  handleClickCancel,
  disabledUploadButton,
  errors,
  handleChangeForm,
  handleBlurForm,
  handleOnDropFile,
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <CustomModal
      show={openModal}
      dialogClassName="uploadDocumentModal"
      actionsChildren={
        <>
          <div className="d-flex">
            <Button
              extraClass="dark"
              onClick={handleClickCancel}
              size="md"
              text={intl.formatMessage({ id: 'cancel' })}
            />
            <Button
              extraClass="primary-full"
              size="md"
              text={intl.formatMessage({ id: 'upload' })}
              onClick={handleClickUpload}
              disabled={disabledUploadButton}
            />
          </div>
        </>
      }
      backdrop="static"
      bodyChildren={
        <ModalBody
          errors={errors}
          form={form}
          onChangeForm={handleChangeForm}
          onBlurForm={handleBlurForm}
          onDropFile={handleOnDropFile}
        />
      }
      onHide={handlOnCloseModal}
      size="md"
      title={intl.formatMessage({
        id: 'title',
      })}
    />
  );
};

export default UploadDocumentModal;

const ModalBody: FC<ModalBodyProps> = ({
  form = DEFAULT_FORM,
  onChangeForm,
  onBlurForm,
  errors,
  onDropFile,
}: ModalBodyProps): JSX.Element => {
  const intl = useIntl();

  const { id, name, summary, file } = form;

  return (
    <div className="uploadDocumentModal__Body">
      <div className="uploadDocumentModal__form">
        <TextField
          field="name"
          label={intl.formatMessage({ id: 'name' })}
          value={name}
          onChange={onChangeForm}
          onBlur={e => onBlurForm(e, id)}
          error={errors?.name}
        />
        <TextareaField
          maxLength={240}
          field="summary"
          onChange={onChangeForm}
          label={intl.formatMessage({ id: 'description' })}
          value={summary}
          help={intl.formatMessage({ id: 'helper description' })}
        />
        <div className="form-group label-field-image">
          <InputLabel
            help={intl.formatMessage({ id: 'helper' })}
            label={intl.formatMessage({ id: 'File' })}
          />
        </div>
        {file && (
          <a href="https://www.w3schools.com">
            <Preview
              className="media-image-thumb"
              img={{
                src: file ? `${getEnvVar('CDN_UPLOADS_URL')}/frontend/assets/no-image.png` : null,
                alt: name,
                width: '80px',
                height: '80px',
              }}
              hover={false}
            />
          </a>
        )}
        <DropZoneBox
          showFooterCropper={true}
          showDropArea={!file}
          multiple={false}
          accept=".jpg, .jpeg, .png"
          onSelect={onDropFile}
          hasCropper={{
            showCropper: true,
            aspectRatioW: 1,
            aspectRatioH: 1,
            minWidth: 400,
            minHeight: 400,
          }}
          showImagesPreviews={false}
          env={{
            serverlessResizeImage: process.env.PUBLIC_SERVER_LESS_RESIZE_IMAGE,
          }}
          deleteImageGallery={() => {}}
          icon="icon-ic-file-upload"
          minWidth={400}
          minHeight={400}
        >
          {file && (
            <Button
              extraClass="primary-full"
              size="sm"
              type="button"
              text={intl.formatMessage({ id: 'upload' })}
            />
          )}
        </DropZoneBox>
      </div>
    </div>
  );
};
