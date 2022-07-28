import InputLabelProps from '../inputLabel/InputLabel.types';

interface Props {
  tags: Array<string>;
  name?: string;
  id?: string;
  value?: string;
  className?: string;
  dataTestId?: string;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  seprators?: Array<string>;
  maxTags?: number;
  minLength?: number;
  maxLength?: number;
  size?: 'sm' | 'md' | 'lg';
  inputLabelProps?: InputLabelProps;
  onChange(tags: Array<string>): void;
  onRemoved?(text: string): void;
  onExisting?(text: string): void;
  onBlur?(e: any): any;
}

export default Props;
