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
  description: '',
  file: null,
  fileName: null,
  file_size: null,
  file_type: null,
  name: '',
  public: true,
};

const UploadDocumentModal: FC<Props> = ({
  openModal = false,
  onCloseModal,
  onClickSave,
}: Props): JSX.Element => {
  const intl = useIntl();

  const [form, setForm] = useState<Form>(DEFAULT_FORM);

  const handleClickClose = () => {
    onCloseModal();
    setForm(DEFAULT_FORM);
  };

  const handleChangeForm = ({ target: { value, name, checked = undefined } }) => {
    let newValue: any = value;
    const newForm: Form = { ...form };

    if (checked) newValue = false;
    if (name === 'file') {
      value.forEach(doc => {
        newForm.fileName = doc.name;
        newForm.file = doc;
        newForm.file_type = doc.type;
        newForm.file_size = doc.size;
      });
    } else {
      newForm[name] = newValue;
    }
    setForm(newForm);
  };

  const handleClickSave = () => {
    onClickSave(form);
    setForm(DEFAULT_FORM);
  };

  return (
    <CustomModal
      show={openModal}
      dialogClassName="uploadDocumentModal"
      actionsChildren={
        <div className="d-flex">
          <Button
            extraClass="dark"
            onClick={handleClickClose}
            text={intl.formatMessage({ id: 'cancel' })}
          />
          <Button
            extraClass="primary-full"
            text={intl.formatMessage({ id: 'save' })}
            onClick={handleClickSave}
            disabled={!form.file || !form.name}
          />
        </div>
      }
      bodyChildren={
        <ModalBody
          form={form}
          onChangeForm={handleChangeForm}
          onDropFile={file => handleChangeForm({ target: { value: file, name: 'file' } })}
        />
      }
      onHide={handleClickClose}
      title={intl.formatMessage({ id: 'toolkit.upload.document.title' })}
    />
  );
};

export default UploadDocumentModal;

const ModalBody: FC<ModalBodyProps> = ({
  form = DEFAULT_FORM,
  onChangeForm,
  onDropFile,
}: ModalBodyProps): JSX.Element => {
  const intl = useIntl();

  const { name, description, file, public: isPublic, file_size: fileSize, fileName } = form;

  return (
    <div className="uploadDocumentModal__Body">
      <div className="uploadDocumentModal__form">
        <TextField
          field="name"
          label={intl.formatMessage({ id: 'name' })}
          value={name}
          onChange={onChangeForm}
          dataTestId="name"
        />
        <TextareaField
          maxLength={240}
          field="description"
          onChange={onChangeForm}
          label={intl.formatMessage({ id: 'description' })}
          showOptionalLabel={true}
          value={description}
          dataTestId="description"
        />
        <div className="form-group label-field-file">
          <InputLabel
            label={intl.formatMessage({ id: 'file' })}
            help={intl.formatMessage({ id: 'toolkit.upload.document.file.helper' })}
          />
        </div>
        {file && (
          <FileCard title={fileName} showBadgePrivate={!isPublic} size={fileSize} file={file} />
        )}
        <DropZoneBox
          showDropArea={!file}
          multiple={false}
          accept=".doc, .docx, .pdf, .xls, .xlsx, .ppt, .pptx"
          onSelect={onDropFile}
          icon="icon-ic-file-upload"
          maxSize={20000000}
        >
          {file && (
            <Button
              extraClass="secondary"
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
