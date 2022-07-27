interface Label {
  label: string;
  field?: string;
  showOptionalLabel?: boolean;
  className?: string;
  style?: object;
  help?: string;
  fontWeight?: number;
  isPrivate?: boolean;
  privateText?: string;
  size?: string;
}

interface Props {
  tags: Array<string>;
  name?: string;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  seprators?: Array<string>;
  maxTags?: number;
  minLength?: number;
  maxLength?: number;
  inputLabelProps?: Label;
  onChange(tags: Array<string>): void;
  onRemoved?(text: string): void;
  onExisting?(text: string): void;
  onBlur?(): void;
}

export default Props;
