interface Breadcrumbs {
  title: string;
  handleClick(): void;
}

interface Props {
  breadcrumbs: Breadcrumbs[];
  style: Object;
}

export default Props;
