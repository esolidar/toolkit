import List from '../../interfaces/list';

interface Props {
  labelResultText: string;
  onChangeSelectPerPage(): void;
  onChangePagination(): void;
  data: List;
  perPageOptions?: number[];
}

export default Props;
