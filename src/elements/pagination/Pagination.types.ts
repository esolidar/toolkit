interface Props {
  innerClass?: string;
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed?: number;
  arrowType: number;
  onChange: () => void;
}

export default Props;
