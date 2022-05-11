interface Form {
  id?: number;
  name: string;
  summary: string;
  file: string;
  status: number;
}

interface Errors {
  name: string;
}

export interface ModalBodyProps {
  form: Form;
  errors: Errors;
  onChangeForm(): void;
  onBlurForm(event: any, id: number): void;
  onDropFile(): void;
}

interface Props {
  openModal?: boolean;
  form: Form;
  disabledUploadButton?: boolean;
  errors: Errors;
  handlOnCloseModal(): void;
  handleClickUpload(): void;
  handleClickCancel(): void;
  handleChangeForm(): void;
  handleBlurForm(): void;
  handleOnDropFile(): void;
}

export default Props;
