interface Props {
  value: string;
  id?: string;
  className?: string;
  inputLabelProps?: any;
  dataTestId?: string;
  maxLength?: number;
  prepend?: string | JSX.Element;
  append?: string | JSX.Element;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  onChange(): void;
  onFocus?(): void;
  onBlur?(): void;
}

export default Props;
