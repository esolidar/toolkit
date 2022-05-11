/* eslint-disable camelcase */
export interface Form {
  id?: number;
  name: string;
  description: string;
  file: string;
  public: boolean;
  file_size: number;
  file_type?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: number;
}

interface Errors {
  name: string;
}

export interface ModalBodyProps {
  form: Form;
  errors: Errors;
  onChangeForm(event: any): void;
  onDropFile(file: any): void;
}

interface Props {
  openModal?: boolean;
  form: Form;
  disabledUploadButton?: boolean;
  errors?: Errors;
  handlOnCloseModal(): void;
  handleClickSave(form: Form): void;
  handleClickCancel(): void;
}

export default Props;
