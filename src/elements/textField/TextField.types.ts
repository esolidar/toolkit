import InputLabelProps from '../inputLabel/InputLabel.types';

interface Icon {
  name: string;
  onClick?(): void;
  show: boolean;
}

interface Props {
  dataTestId?: string;
  info?: string;
  inputLabelProps?: InputLabelProps;
  field?: string;
  id?: string;
  value?: number | string;
  defaultValue?: number | string;
  label?: string;
  type?: string;
  onChange?(): void;
  error?: any;
  maxLength?: string;
  onBlur?(): void;
  onFocus?(): void;
  onClick?(): void;
  autofocus?: boolean;
  placeholder?: string;
  message?: string;
  disabled?: boolean;
  help?: string;
  required?: boolean;
  className?: string;
  inputRef?: any;
  children?: JSX.Element;
  showOptionalLabel?: boolean;
  password?: boolean;
  leftIcon?: Icon;
  rightIcon?: Icon;
  size?: string;
  isLoading?: boolean;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
}

export default Props;
