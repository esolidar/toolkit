import InputLabelProps from '../inputLabel/InputLabel.types';
import TextFieldProps from '../textField/TextField.types';

interface Props {
  id?: string;
  dataTestId?: string;
  value: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  error?: string;
  placeholder?: string;
  colors?: string[];
  trianglePosition?: 'hide' | 'top-left' | 'top-right' | 'top-left';
  onChange(color: string): any;
  inputLabelProps?: InputLabelProps;
  textFieldProps?: TextFieldProps;
}

export default Props;
