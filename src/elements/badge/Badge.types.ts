interface Props {
  className?: string;
  dataTestId?: string;
  extraClass?: 'default' | 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'dark';
  fullWidth?: boolean;
  style?: any;
  text?: string;
  plaintext?: string;
  icon?: string;
  iconDataTestId?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'span' | 'button';
  onClick?(): void;
}

export default Props;
