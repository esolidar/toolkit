interface Breadcrumbs {
  title: string;
  handleClick(): void;
}

interface Props {
  breadcrumbs: Breadcrumbs[];
}

export default Props;
