interface Props {
  className?: string;
  dataTestId?: string;
  extraClass?: string;
  fullWidth?: boolean;
  style?: any;
  text?: string;
  plaintext?: string;
  icon?: string;
  iconDataTestId?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'span' | 'button';
  onClick?(): void;
}

export default Props;
