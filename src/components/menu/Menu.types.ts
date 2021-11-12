interface Item {
  icon?: string;
  text?: string;
  href?: string;
  showNotificationsIcon?: boolean;
  disabled?: boolean;
  onClick?(): void;
  isActive?: boolean;
  separator?: true;
}

interface Props {
  items: Item[];
  isCollapsed: boolean;
}

export default Props;
