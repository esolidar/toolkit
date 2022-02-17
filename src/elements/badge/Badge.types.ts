interface Props {
  className?: string;
  dataTestId?: string;
  extraClass?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'danger'
    | 'warning'
    | 'preview'
    | 'dark';
  fullWidth?: boolean;
  style?: React.CSSProperties;
  text?: string;
  plaintext?: string | JSX.Element;
  icon?: string;
  iconDataTestId?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'span' | 'button';
  rounded?: boolean;
  onClick?(): void;
}

export default Props;
