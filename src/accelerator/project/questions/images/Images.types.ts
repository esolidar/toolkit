interface Props {
  imagesCount: number;
  imagesList: any[];
  handleSelectImage(): void;
  handleDeleteImage(): void;
  handleOrderImages(): void;
  cropModalStatus: boolean;
}

export default Props;
