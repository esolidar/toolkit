import Tooltip from '../../../elements/tooltip/Tooltip.types';

export interface DropdownItem {
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
  thumb: string;
  name: string;
  date: Date;
  dropdown: DropdownItem[];
  text: string;
  social: boolean;
  reply: boolean;
  images: any[];
  preview: any;
  files: any[];
  liked?: boolean;
}

export default Props;
