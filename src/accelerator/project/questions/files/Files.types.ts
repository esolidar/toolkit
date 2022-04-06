interface Props {
  question: string;
  description: string;
  reply: any[];
  required: boolean;
  handleSelectFile(files: any): void;
  handleDeleteFile?(id: number): void;
  onDropError?(errorList: any): void;
}

export default Props;
