interface Props {
  buttonNextText: string;
  handleClickBack(): void;
  handleClickNext(): void;
  totalPages: number;
  currentPage: number;
  disableClickNext: boolean;
  isLoading: boolean;
}

export default Props;
