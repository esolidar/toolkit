interface Props {
  name: string;
  size?: 'sm' | 'xs' | 'md' | 'lg';
  color?: string;
  className?: string;
  dataTestId?: string;
  style?: React.CSSProperties;
}

export default Props;
