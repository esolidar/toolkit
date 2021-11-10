interface Item {
  icon?: string;
  text?: string;
  href?: string;
}

interface Props {
  items: Item[];
  isCollapsed: boolean;
}

export default Props;
