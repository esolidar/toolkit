import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import Props from './Navigation.types';

const Navigation: FC<Props> = ({
  className,
  dataTestId = 'navigation-component',
  menu,
}: Props): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const classes = classNames('navigation', isCollapsed && `navigation--isCollapsed`, className);

  const renderMenu = items =>
    items.map((item, index) => {
      const { icon, text, href } = item;

      return (
        <li key={index}>
          <a href={href}>
            {icon && <Icon iconClass={icon} />}
            {!isCollapsed && <span>{text}</span>}
          </a>
        </li>
      );
    });

  const { topMenus, centerMenus, bottomMenus } = menu;

  return (
    <div className={classes} data-testid={dataTestId}>
      <div className="navigation__sidebar">
        <div className="navigation__header">
          <a href="/" className="">
            <img
              className="logo"
              alt="Business eSolidar"
              src="https://static.esolidar.com/frontend/logo/esolidar/logo-xsmall.svg"
            />
          </a>
          {!isCollapsed && (
            <>
              <span className="divider d-none d-lg-block" />
              <div className="">
                <a href="/" data-rb-event-key="/" className="nav-link">
                  Whitelabel Esolidarity
                </a>
              </div>
            </>
          )}
          <button onClick={() => setIsCollapsed(!isCollapsed)}>x</button>
        </div>
        <div
          className={`navigation__body ${isCollapsed ? 'navigation__body--align-items-end' : ''}`}
        >
          {topMenus && <ul>{renderMenu(topMenus)}</ul>}
          {centerMenus && <ul>{renderMenu(centerMenus)}</ul>}
          {bottomMenus && <ul>{renderMenu(bottomMenus)}</ul>}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
