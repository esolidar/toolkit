interface Props {
  reply: any[];
  handleSelectImage(): void;
  handleDeleteImage(id: number): void;
  handleOrderImages(): void;
  cropModalStatus: boolean;
  onDropError?(errorList: any): void;
  type?: string;
}

export default Props;
