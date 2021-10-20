interface Props {
  title: string;
  status: 'info' | 'success' | 'warning' | 'danger';
  subtitle?: string;
  dataTestId?: string;
  extraClass?: string;
  style?: React.CSSProperties;
  icon?: string;
}

export default Props;
