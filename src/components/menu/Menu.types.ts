interface Item {
  icon?: string;
  text?: string;
  href?: string;
  showNotificationsIcon?: boolean;
  disabled?: boolean;
  onClick?(): void;
  isActive?: boolean;
}

interface Props {
  items: Item[];
  isCollapsed: boolean;
}

export default Props;
