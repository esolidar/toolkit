/* eslint-disable camelcase */
export interface Form {
  description?: string;
  file: string;
  fileName?: string;
  file_size?: number;
  file_type?: string;
  name: string;
  public?: boolean;
}

export interface ModalBodyProps {
  form: Form;
  onChangeForm(event: any): void;
  onDropFile(file: any): void;
}

interface Props {
  openModal?: boolean;
  onCloseModal(): void;
  onClickSave(form: Form): void;
}

export default Props;
