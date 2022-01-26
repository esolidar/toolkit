interface Props {
  disabled?: boolean;
  id?: string;
  defaultImg: string;
  disabledHover?: boolean;
  disabledImg?: string;
  checkedImg?: string;
  isChecked: boolean;
  name: string;
  onChange?(value: boolean): void;
  size: 'sm' | 'md' | 'lg';
  subtitle?: string;
  title: string;
}

export default Props;
