import { Item } from '../menu/Menu.types';

interface SidebarItem extends Item {
  submenu?: Item[];
  keepSubMenuOpen?: boolean;
}

interface companyInfo {
  logo: string;
  name: string;
  esolidarLogo: string;
}

interface Props {
  companyInfo: companyInfo;
  className?: string;
  mainMenu: SidebarItem[];
  bottomMenu: SidebarItem[];
  collapsed: boolean;
}

export interface subMenuProps {
  title: string;
  items: Item[];
  isOpen: boolean;
}

export default Props;
