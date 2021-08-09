interface Props {
  labelResultText: string;
  onChangeSelectPerPage(): void;
  onChangePagination(): void;
  data: any;
  perPageOptions: Array<number>;
}

export default Props;
