interface Props {
  buttonNextText: string;
  handleClickBack(): void;
  handleClickNext(): void;
  handleDarkButton(): void;
  buttonDarkText: string;
  disabledDarkButton: boolean;
  totalPages: number;
  currentPage: string;
  disableClickNext: boolean;
  isLoading: boolean;
}

export default Props;
