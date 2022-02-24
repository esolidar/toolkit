interface Breadcrumbs {
  title: string;
  handleClick(): void;
}

interface Props {
  breadcrumbs: Breadcrumbs[];
  style?: React.CSSProperties;
}

export default Props;
