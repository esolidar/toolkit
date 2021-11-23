/* eslint-disable no-nested-ternary */
import classNames from 'classnames';
import React, { FC } from 'react';
import Icon from '../icon';
import Tooltip from '../../elements/tooltip';
import Props from './Menu.types';

const Menu: FC<Props> = ({ items, isCollapsed }: Props): JSX.Element => {
  const classes = classNames('menu', isCollapsed && 'menu--isCollapsed');

  const renderMenu = () =>
    items.map((item, index) => {
      const {
        icon,
        text,
        href,
        showNotificationsIcon,
        disabled,
        onClick,
        isActive,
        separator,
        hide,
      } = item;

      const listClasses = classNames('menu__listItem', separator && 'menu__listItem--separator');
      const itemClasses = classNames(
        'menu__item',
        isActive && 'menu__item--active',
        showNotificationsIcon && 'menu__item--notification',
        disabled && 'menu__item--disabled'
      );
      if (hide === 1) {
        return '';
      }
      return (
        <li key={index} className={listClasses}>
          {separator && <span className="menu__item--separator" />}
          {onClick ? (
            <Tooltip
              tooltipBodyChild={
                <button type="button" onClick={onClick} className={itemClasses} disabled={disabled}>
                  {icon && <Icon iconClass={icon} />}
                  {!isCollapsed && <span>{text}</span>}
                </button>
              }
              overlay={<span>{text}</span>}
              displayNone={!isCollapsed}
            />
          ) : href ? (
            <Tooltip
              tooltipBodyChild={
                <a type="media_type" href={href} className={itemClasses}>
                  {icon && <Icon iconClass={icon} />}
                  {!isCollapsed && <span>{text}</span>}
                </a>
              }
              overlay={<span>{text}</span>}
              displayNone={!isCollapsed}
            />
          ) : (
            text && (
              <Tooltip
                tooltipBodyChild={
                  <div className={itemClasses}>
                    {icon && <Icon iconClass={icon} />}
                    {!isCollapsed && <span>{text}</span>}
                  </div>
                }
                overlay={<span>{text}</span>}
                displayNone={!isCollapsed}
              />
            )
          )}
        </li>
      );
    });

  return <div className={classes}>{items && <ul className="menu__list">{renderMenu()}</ul>}</div>;
};

export default Menu;
