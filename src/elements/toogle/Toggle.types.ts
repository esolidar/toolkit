interface Props {
  className?: string;
  defaultChecked?: boolean;
  isChecked?: boolean;
  name?: string;
  onChange?(event?: any): void;
  inputRef?: any;
  isDisabled?: boolean;
}

export default Props;
