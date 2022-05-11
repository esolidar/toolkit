import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import CustomModal from '../../elements/customModal';
import Button from '../../elements/button';
import TextField from '../../elements/textField';
import TextareaField from '../../elements/textareaField';
import DropZoneBox from '../../elements/dropZoneBox';
import InputLabel from '../../elements/inputLabel';
import FileCard from '../fileCard';
import Toggle from '../../elements/toogle';
import Props, { Form, ModalBodyProps } from './UploadDocumentModal.types';

const DEFAULT_FORM = {
  name: '',
  description: '',
  file: null,
  public: true,
  file_size: null,
};

const UploadDocumentModal: FC<Props> = ({
  openModal = false,
  handlOnCloseModal,
  handleClickSave,
  handleClickCancel,
  disabledUploadButton,
  errors,
}: Props): JSX.Element => {
  const [form, setForm] = useState<Form>(DEFAULT_FORM);

  const intl = useIntl();

  const handleChangeForm = ({ target: { value, name, checked = undefined } }) => {
    let newValue = value;
    if (checked) newValue = false;
    const newForm = { ...form };
    newForm[name] = newValue;
    setForm(newForm);
  };

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
              text={intl.formatMessage({ id: 'save' })}
              onClick={() => handleClickSave(form)}
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
          onDropFile={file => handleChangeForm({ target: { value: file, name: 'file' } })}
        />
      }
      onHide={handlOnCloseModal}
      size="md"
      title={intl.formatMessage({
        id: 'toolkit.upload.document.title',
      })}
    />
  );
};

export default UploadDocumentModal;

const ModalBody: FC<ModalBodyProps> = ({
  form = DEFAULT_FORM,
  onChangeForm,
  errors,
  onDropFile,
}: ModalBodyProps): JSX.Element => {
  const intl = useIntl();

  const { name, description, file, public: isPublic, file_size: fileSize } = form;

  return (
    <div className="uploadDocumentModal__Body">
      <div className="uploadDocumentModal__form">
        <TextField
          field="name"
          label={intl.formatMessage({ id: 'name' })}
          value={name}
          onChange={onChangeForm}
          error={errors?.name}
        />
        <TextareaField
          maxLength={240}
          field="description"
          onChange={onChangeForm}
          label={intl.formatMessage({ id: 'description' })}
          value={description}
        />
        <div className="form-group label-field-file">
          <InputLabel
            label={intl.formatMessage({ id: 'file' })}
            help={intl.formatMessage({ id: 'toolkit.upload.document.file.helper' })}
          />
        </div>
        {file && <FileCard title={name} showBadgePrivate={isPublic} size={fileSize} file={file} />}
        <DropZoneBox
          showDropArea={!file}
          multiple={false}
          accept=".jpeg,.jpg,.png,.doc,.odt,.pdf,.xls,.ods,.ppt,.odp,.csv,.text,.txt,.pptx,.xlsx,.xltx,.docx"
          onSelect={onDropFile}
          env={{
            serverlessResizeImage: process.env.PUBLIC_SERVER_LESS_RESIZE_IMAGE,
          }}
          icon="icon-ic-file-upload"
          minWidth={400}
          minHeight={400}
        >
          {file && (
            <Button
              extraClass="primary-full"
              size="sm"
              type="button"
              text={intl.formatMessage({ id: 'toolkit.upload.document.file.replace' })}
            />
          )}
        </DropZoneBox>
        <div className="private">
          <div className="private-toogle">
            <Toggle isChecked={!isPublic} name="public" onChange={onChangeForm} />
          </div>
          <InputLabel
            field="public"
            fontWeight={400}
            label={intl.formatMessage({ id: 'toolkit.upload.document.file.private' })}
          />
        </div>
      </div>
    </div>
  );
};
