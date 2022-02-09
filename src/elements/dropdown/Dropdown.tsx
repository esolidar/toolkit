import React, { FC } from 'react';
import DropdownBTS from 'react-bootstrap/Dropdown';
import Button from '../button';
import Icon from '../icon';
import CustomToggle from './CustomToggle';
import Props, { Item } from './Dropdown.types';

const Dropdown: FC<Props> = ({ toggleIcon = 'MoreVertical', items }: Props): JSX.Element => {
  const handleClick = (e, item) => {
    e.stopPropagation();
    item.onClick();
  };

  const filteredItems: Item[] = items.map(item => ({ ...item, show: item.show !== false }));

  return (
    <DropdownBTS className="esolidar-dropdown">
      <DropdownBTS.Toggle as={CustomToggle} id="dropdown-custom-components">
        <Button
          extraClass="primary-full"
          type="icon"
          icon={<Icon name={toggleIcon} size="sm" />}
          ghost
        />
      </DropdownBTS.Toggle>
      <DropdownBTS.Menu className="esolidar-dropdown__menu">
        {filteredItems.map(item => {
          if (item.show)
            return (
              <DropdownBTS.Item
                key={item.id}
                className="esolidar-dropdown__item"
                href={item.href}
                onClick={e => handleClick(e, item)}
                disabled={item.disabled}
              >
                {item.leftIcon && <Icon name={item.leftIcon} size="sm" />}
                <span className="esolidar-dropdown__item--text">{item.text}</span>
                {item.rightIcon && <Icon name={item.rightIcon} size="sm" />}
              </DropdownBTS.Item>
            );
        })}
      </DropdownBTS.Menu>
    </DropdownBTS>
  );
};

export default Dropdown;
