interface Props {
  labelResultText: string;
  onChangeSelectPerPage(): void;
  onChangePagination(): void;
  data: any;
  perPageOptions?: number[];
}

export default Props;
