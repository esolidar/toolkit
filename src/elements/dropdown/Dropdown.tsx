import React, { FC } from 'react';
import DropdownBTS from 'react-bootstrap/Dropdown';
import Button from '../button';
import Icon from '../../components/icon';
import CustomToggle from './CustomToggle';
import Props from './Dropdown.types';

const Dropdown: FC<Props> = ({ toggleIcon, items }: Props): JSX.Element => {
  const handleClick = (e, item) => {
    e.stopPropagation();
    item.onClick();
  };

  return (
    <DropdownBTS className="esolidar-dropdown">
      <DropdownBTS.Toggle as={CustomToggle} id="dropdown-custom-components">
        <Button extraClass="ghost" type="icon" icon={<Icon iconClass={toggleIcon} />} />
      </DropdownBTS.Toggle>
      <DropdownBTS.Menu className="esolidar-dropdown__menu">
        {items.map(item => {
          if (item.show)
            return (
              <DropdownBTS.Item
                key={item.id}
                className="esolidar-dropdown__item"
                href={item.href}
                onClick={e => handleClick(e, item)}
                disabled={item.disabled}
              >
                {item.leftIcon && <Icon iconClass={item.leftIcon} />}
                <span className="esolidar-dropdown__item--text">{item.text}</span>
                {item.rightIcon && <Icon iconClass={item.rightIcon} />}
              </DropdownBTS.Item>
            );
        })}
      </DropdownBTS.Menu>
    </DropdownBTS>
  );
};

export default Dropdown;
