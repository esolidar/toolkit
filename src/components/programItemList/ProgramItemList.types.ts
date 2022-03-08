interface Props {
  id: number;
  image: string;
  title: string;
  summary: string;
  dropdownItems?: any[];
  isLive?: boolean;
  isDraft?: boolean;
  handleClickItem(id: number): void;
}

export default Props;
