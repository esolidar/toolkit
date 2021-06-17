interface Props {
  innerClass?: string;
  prevPageText?: JSX.Element;
  nextPageText?: JSX.Element;
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed?: number;
  onChange: () => void;
}

export default Props;
