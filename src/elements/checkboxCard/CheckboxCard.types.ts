import { Item } from '../dropdown/Dropdown.types';

interface Props {
  disabled?: boolean;
  id?: string;
  defaultImg?: string;
  disabledHover?: boolean;
  disabledImg?: string;
  checkedImg?: string;
  isChecked?: boolean;
  name: string;
  onChange?(value: boolean): void;
  size: 'sm' | 'md' | 'lg';
  subtitle?: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  dropdownItems?: Item[];
  icon?: string;
  fullWith?: boolean;
  roundedIcon?: boolean;
}

export default Props;
