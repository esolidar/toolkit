interface Props {
  question: string;
  description: string;
  reply: any[];
  handleSelectFile(): void;
  handleDeleteFile?(id: number): void;
  onDropError?(errorList: any): void;
}

export default Props;
