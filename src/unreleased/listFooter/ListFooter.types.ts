/* eslint-disable camelcase */

interface Props {
  labelResultText?: string;
  onChangeSelectPerPage(): void;
  onChangePagination(): void;
  total: number;
  current_page: number;
  per_page: number | string;
  perPageOptions?: number[];
}

export default Props;
