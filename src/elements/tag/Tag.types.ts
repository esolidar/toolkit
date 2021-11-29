interface Props {
  className?: string;
  dataTestId?: string;
  extraClass?: 'default' | 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'dark';
  fullWidth?: boolean;
  style?: React.CSSProperties;
  text?: string;
  plaintext?: string;
  leftIcon?: string;
  rightIcon?: string;
  leftImage?: string;
  iconDataTestId?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'span' | 'button';
  onClick?(): void;
  id: string;
  name: string;
  value: string;
  onChange?(): void;
  checked: boolean;
  disabled: boolean;
}

export default Props;
