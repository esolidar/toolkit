export interface Item {
  id: number;
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  href?: string;
  onClick?(): void;
  show: boolean;
  disabled?: boolean;
  divider?: boolean;
}

interface Props {
  customButton?: any;
  toggleIcon: string;
  items: Item[];
}

export default Props;
