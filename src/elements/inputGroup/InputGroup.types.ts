import InputLabelProps from '../inputLabel/InputLabel.types';

interface Props {
  name: string;
  value?: string;
  id?: string;
  className?: string;
  inputLabelProps?: InputLabelProps;
  dataTestId?: string;
  maxLength?: number;
  prepend?: string | JSX.Element;
  append?: string | JSX.Element;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  onChange(e: any): any;
  onFocus?(e: any): any;
  onBlur?(e: any): any;
}

export default Props;
