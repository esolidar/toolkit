/* eslint-disable camelcase */
export interface Form {
  id?: number;
  name: string;
  description?: string;
  file: string;
  public?: boolean;
  file_size?: number;
  file_type?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: number;
}

export interface ModalBodyProps {
  form: Form;
  onChangeForm(event: any): void;
  onDropFile(file: any): void;
}

interface Props {
  openModal?: boolean;
  form: Form;
  handlOnCloseModal(): void;
  handleClickSave(form: Form): void;
  handleClickCancel(): void;
}

export default Props;
