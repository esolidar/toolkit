/* eslint-disable no-nested-ternary */
import classNames from 'classnames';
import React, { FC } from 'react';
import Icon from '../icon';
import Props from './Menu.types';

const Menu: FC<Props> = ({ items, isCollapsed }: Props): JSX.Element => {
  const classes = classNames('menu', isCollapsed && 'menu--isCollapsed');

  const renderMenu = () =>
    items.map((item, index) => {
      const { icon, text, href, showNotificationsIcon, disabled, onClick, isActive, separator } =
        item;

      const listClasses = classNames('menu__listItem', separator && 'menu__listItem--separator');
      const itemClasses = classNames(
        'menu__item',
        isActive && 'menu__item--active',
        showNotificationsIcon && 'menu__item--notification',
        disabled && 'menu__item--disabled'
      );
      return (
        <li key={index} className={listClasses}>
          {separator && <span className="menu__item--separator" />}
          {onClick ? (
            <button type="button" onClick={onClick} className={itemClasses} disabled={disabled}>
              {icon && <Icon iconClass={icon} />}
              {!isCollapsed && <span>{text}</span>}
            </button>
          ) : href ? (
            <a type="media_type" href={href} className={itemClasses}>
              {icon && <Icon iconClass={icon} />}
              {!isCollapsed && <span>{text}</span>}
            </a>
          ) : (
            <div className={itemClasses}>
              {icon && <Icon iconClass={icon} />}
              {!isCollapsed && <span>{text}</span>}
            </div>
          )}
        </li>
      );
    });

  return <div className={classes}>{items && <ul className="menu__list">{renderMenu()}</ul>}</div>;
};

export default Menu;
