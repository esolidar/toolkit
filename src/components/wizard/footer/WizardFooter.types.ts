interface Props {
  handleClickBack(): void;
  handleClickNext(): void;
  totalPages: number;
  currentPage: number;
  disableClickNext: boolean;
}

export default Props;
