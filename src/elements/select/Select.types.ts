import InputLabelProps from '../inputLabel/InputLabel.types';

export interface Option {
  description?: string;
  isDisabled?: boolean;
  label: string;
  leftIcon?: JSX.Element;
  show?: boolean;
  value: string;
  isLabelBold?: boolean;
}

interface Props {
  error?: string | boolean;
  helperText?: string;
  inputLabelProps?: InputLabelProps;
  isClearable?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  name?: string;
  onChange(value: string): void;
  onClear?(): void;
  options: Option[];
  placeholder?: string;
  placeholderLeftIcon?: JSX.Element;
  showDropdownArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  value: string;
  menuWidth?: string;
  fullWidth?: boolean;
}

export interface CustomOptionProps {
  data: Option;
  innerProps: any;
  isDisabled: boolean;
  isSelected: boolean;
}

export interface FormatOptionLabelProps extends Option {}

export default Props;
