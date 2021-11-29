/* eslint-disable no-param-reassign */
import React, { FC, useRef, useState, useEffect } from 'react';
import classnames from 'classnames';
import cookie from 'react-cookies';
import Menu from '../menu';
import Icon from '../icon';
import Props, { subMenuProps } from './Sidebar.types';

const Sidebar: FC<Props> = ({
  companyInfo,
  className,
  mainMenu,
  bottomMenu,
  collapsed,
}: Props): JSX.Element => {
  const stopRef = useRef();
  const anchorRef = useRef();
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const [subMenu, setSubMenu] = useState([]);
  const [subMenuTitle, setSubMenuTitle] = useState('');
  const [totalMenus, setTotalMenus] = useState([]);
  const classes = classnames(
    'sidebarNavigation',
    isCollapsed && `sidebarNavigation--isCollapsed`,
    isOpenSubMenu && `sidebarNavigation--isOpenSubMenu`,
    className
  );
  const { esolidarLogo, name } = companyInfo;

  useEffect(() => {
    const menus = [...bottomMenu, ...mainMenu];
    setTotalMenus(menus);
    const activeMenus = menus.filter(item => item.isActive === true);
    if (isOpenSubMenu) {
      const openMenu = menus.find(item => item.text === subMenuTitle);
      setSubMenu(openMenu.submenu);
      const activeMenu = activeMenus.find(item => item.text !== subMenuTitle);
      if (activeMenu && subMenuTitle !== activeMenu.text) {
        setIsOpenSubMenu(false);
        collapseSidebar(collapsed || !isCollapsed);
        setSubMenuTitle('');
      }
    }
  }, [bottomMenu, mainMenu]);

  const openSubMenu = item => {
    if (item.text !== subMenuTitle) {
      setSubMenuTitle(item.text);
      setSubMenu(item.submenu);
      setIsOpenSubMenu(false);
      setTimeout(() => {
        setIsOpenSubMenu(true);
      }, 500);
      setIsCollapsed(true);
    }
  };

  const renderMenus = items => {
    const activeMenus = totalMenus.filter(item => item.isActive === true);

    items.map(item => {
      const { submenu } = item;
      if (submenu) {
        item.onClick = () => openSubMenu(item);
        if (subMenuTitle === item.text && isOpenSubMenu) {
          item.isActive = true;
        }
        if (item.keepSubMenuOpen) {
          openSubMenu(item);
        }
      }

      if (subMenuTitle !== '') {
        const activeMenu = activeMenus.filter(item => item.text !== subMenuTitle);
        const withSubmenusActive = activeMenus.find(item => item.text === subMenuTitle);
        if (activeMenu.length > 0 && isOpenSubMenu) {
          if (item.text === activeMenu[0].text) {
            item.isActive = false;
          }
        }
        if (withSubmenusActive && isOpenSubMenu) {
          if (item.text === withSubmenusActive.text) {
            item.isActive = false;
          }
        }
      }
    });

    return items;
  };

  const collapseSidebar = value => {
    setIsCollapsed(value);
    if (value) {
      cookie.save('sidebar_collapsed', true, { path: '/' });
    } else {
      cookie.remove('sidebar_collapsed', { path: '/' });
    }
  };

  return (
    <div className={classes} data-testid="sidebar-component" id="sidebar-component">
      <SidebarSubMenu title={subMenuTitle} items={subMenu} isOpen={isOpenSubMenu} />
      <div className="sidebarNavigation__sidebar">
        <div className="sidebarNavigation__header">
          <a href="/" className="sidebarNavigation__header--logo">
            <img alt="Esolidar" src={esolidarLogo} />
          </a>
          {!isCollapsed && (
            <a href="/" className="sidebarNavigation__header--companyName">
              {name}
            </a>
          )}
        </div>
        <div
          className={classnames(
            'sidebarNavigation__body',
            isCollapsed && 'sidebarNavigation__body--align-items-end'
          )}
        >
          <div className="sidebarNavigation__mainMenu">
            <Menu items={renderMenus(mainMenu)} isCollapsed={isCollapsed} />
            <div id="stop-anchor" ref={stopRef} />
          </div>
          <div className="sidebarNavigation__bottomMenu" ref={anchorRef}>
            <Menu items={renderMenus(bottomMenu)} isCollapsed={isCollapsed} />
            <Icon
              iconClass={classnames(
                'icon-equalizer2 sidebarNavigation__collapsed--button',
                isOpenSubMenu && 'sidebarNavigation__collapsed--button--disabled'
              )}
              onClick={() => !isOpenSubMenu && collapseSidebar(!isCollapsed)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarSubMenu: FC<subMenuProps> = ({
  title,
  items,
  isOpen = false,
}: subMenuProps): JSX.Element => (
  <div
    className={classnames(
      'sidebarNavigation__submenu',
      isOpen
        ? `sidebarNavigation__submenu--open`
        : `sidebarNavigation__submenu--open sidebarNavigation__submenu--close`
    )}
  >
    <div className="sidebarNavigation__submenu--header">
      <h6>{title}</h6>
    </div>
    <div className="sidebarNavigation__submenu--body">
      <div className="sidebarNavigation__submenu--items">
        <Menu items={items} isCollapsed={false} />
      </div>
    </div>
  </div>
);
