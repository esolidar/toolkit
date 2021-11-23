/* eslint-disable no-param-reassign */
import React, { FC, useRef, useState } from 'react';
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
  const classes = classnames(
    'sidebarNavigation',
    isCollapsed && `sidebarNavigation--isCollapsed`,
    isOpenSubMenu && `sidebarNavigation--isOpenSubMenu`,
    className
  );
  const { esolidarLogo, name } = companyInfo;

  const openSubMenu = item => {
    if (JSON.stringify(subMenu) !== JSON.stringify(item.submenu)) {
      setSubMenuTitle(item.text);
      setSubMenu(item.submenu);
      if (isOpenSubMenu) {
        setIsOpenSubMenu(false);
        setTimeout(() => {
          setIsOpenSubMenu(true);
        }, 500);
      } else {
        setTimeout(() => {
          setIsOpenSubMenu(true);
        }, 500);
      }
      localStorage.setItem('sidebar_collapsed', 'yes');
      setIsCollapsed(true);
    }
  };

  const renderMenus = items => {
    items.map(item => {
      const { submenu } = item;
      if (submenu) {
        item.onClick = () => openSubMenu(item);
        if (subMenuTitle === item.text && isOpenSubMenu) {
          item.isActive = true;
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
