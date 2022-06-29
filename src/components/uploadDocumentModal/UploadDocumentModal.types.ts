/* eslint-disable camelcase */
export interface Form {
  name: string;
  description?: string;
  file: string;
  public?: boolean;
  file_size?: number;
  file_type?: string;
  fileName?: string;
}

export interface ModalBodyProps {
  form: Form;
  onChangeForm(event: any): void;
  onDropFile(file: any): void;
}

interface Props {
  openModal?: boolean;
  handlOnCloseModal(): void;
  handleClickSave(form: Form): void;
  handleClickCancel(): void;
}

export default Props;
