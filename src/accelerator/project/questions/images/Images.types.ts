interface Props {
  reply: any[];
  handleSelectImage(): void;
  handleDeleteImage(id: number): void;
  handleOrderImages(): void;
  cropModalStatus: boolean;
  onDropError?(errorList: any): void;
}

export default Props;
