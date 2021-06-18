interface Props {
  innerClass?: string;
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed?: number;
  arrowType: number;
  dataTestId?: string;
  onChange: () => void;
}

export default Props;
