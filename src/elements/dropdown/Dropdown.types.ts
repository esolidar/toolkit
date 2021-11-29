interface Item {
  id: number;
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  href?: string;
  onClick?(): void;
  show: boolean;
  disabled?: boolean;
}

interface Props {
  toggleIcon: string;
  items: Item[];
}

export default Props;
