interface Props {
  innerClass?: string;
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed?: number;
  arrowType: number;
  dataTestId?: string;
  onChange: (newPage: number) => void;
}

export default Props;
