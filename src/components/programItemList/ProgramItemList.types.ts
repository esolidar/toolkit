interface DropdownItems {
  id: number;
  leftIcon: string;
  onClick(): void;
  show: boolean;
  text: string;
}

interface Props {
  id: number;
  image: string;
  title: string;
  summary: string;
  dropdownItems?: DropdownItems[];
  isLive?: boolean;
  isDraft?: boolean;
  handleClickItem(id: number): void;
}

export default Props;
