interface LefIcon {
  name: string;
  onClick(): void;
  show: boolean;
}

interface Props {
  options: [];
  value: number | string;
  label: string;
  field: string;
  onChange(): void;
  disabled: boolean;
  selectText: string;
  error: object | string;
  defaultValue: number | string;
  className?: string;
  hiddenSelectText?: boolean;
  dataTestId?: string;
  optionTestId?: string;
  info?: string;
  help?: string;
  showOptionalLabel?: boolean;
  isLabelLeft?: boolean;
  leftIcon?: LefIcon;
  size?: string;
}

export default Props;
