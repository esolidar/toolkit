interface Menu {
  icon?: string;
  text?: string;
  href?: string;
}

interface SidebarMenu {
  topMenus: Menu[];
  centerMenus: Menu[];
  bottomMenus: Menu[];
}

interface Props {
  className?: string;
  dataTestId?: string;
  menu: SidebarMenu;
}

export default Props;
