export interface Option {
  description?: string;
  isDisabled?: boolean;
  label: string;
  leftIcon?: JSX.Element;
  show: boolean;
  value: string;
}

interface InputLabel {
  field?: string;
  label: string;
  showOptionalLabel?: boolean;
  cssClass?: string;
  style?: any;
  help?: string;
  fontWeight?: number;
}

interface Props {
  error?: string | boolean;
  helperText?: string;
  inputLabelProps?: InputLabel;
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
}

export interface CustomOptionProps {
  data: Option;
  innerProps: any;
  isDisabled: boolean;
  isSelected: boolean;
}

export interface FormatOptionLabelProps extends Option {}

export default Props;
