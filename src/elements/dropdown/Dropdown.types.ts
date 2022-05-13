import Tooltip from '../tooltip/Tooltip.types';

export interface Item {
  id: number;
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  href?: string;
  onClick?(): void;
  show?: boolean;
  disabled?: boolean;
  divider?: boolean;
  tooltip?: Tooltip;
}

interface Props {
  customButton?: JSX.Element;
  toggleIcon?: string;
  items: Item[];
  dropAlign?: 'left' | 'right';
}

export default Props;
