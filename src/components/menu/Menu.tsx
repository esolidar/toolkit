import classNames from 'classnames';
import React, { FC } from 'react';
import Icon from '../icon';
import Props from './Menu.types';

const Menu: FC<Props> = ({ items, isCollapsed }: Props): JSX.Element => {
  const classes = classNames('menu', isCollapsed && `menu--isCollapsed`);

  const renderMenu = () =>
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

  return (
    <div className={classes}>
      <ul>{renderMenu}</ul>
    </div>
  );
};

export default Menu;
