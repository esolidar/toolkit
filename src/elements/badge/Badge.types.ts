interface Props {
  className?: string;
  dataTestId?: string;
  extraClass?:
    | 'black'
    | 'dark-gray'
    | 'white'
    | 'turquoise'
    | 'green'
    | 'red'
    | 'yellow'
    | 'blue'
    | 'dark-blue'
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
  type?: 'default' | 'text' | 'button';
  rounded?: boolean;
  onClick?(): void;
}

export default Props;
