import React, { FC } from 'react';
import DropdownBTS from 'react-bootstrap/Dropdown';
import Button from '../button';
import Icon from '../icon';
import CustomToggle from './CustomToggle';
import Tooltip from '../tooltip';
import Props, { Item } from './Dropdown.types';

const defaultButton = toggleIcon => (
  <Button extraClass="primary-full" type="icon" icon={<Icon name={toggleIcon} size="sm" />} ghost />
);

const Dropdown: FC<Props> = ({
  customButton,
  toggleIcon = 'MoreVertical',
  id = '0',
  items,
  disabled = false,
  dropAlign = 'left',
}: Props): JSX.Element => {
  const handleClick = item => {
    item.onClick();
  };

  const filteredItems: Item[] = items.map(item => ({ ...item, show: item.show !== false }));

  return (
    <DropdownBTS className="esolidar-dropdown">
      <DropdownBTS.Toggle
        as={CustomToggle}
        disabled={disabled}
        id={`dropdown-custom-components-${id}`}
      >
        {customButton || defaultButton(toggleIcon)}
      </DropdownBTS.Toggle>
      <DropdownBTS.Menu className="esolidar-dropdown__menu" align={dropAlign}>
        {filteredItems.map(item => {
          if (item.divider)
            return <DropdownBTS.Divider className="esolidar-dropdown__divider" key={item.id} />;
          if (item.tooltip && item.show) {
            return (
              <Tooltip
                key={item.id}
                tooltipBodyChild={
                  <DropdownBTS.Item
                    key={item.id}
                    className="esolidar-dropdown__item"
                    href={item.href}
                    onClick={() => handleClick(item)}
                    disabled={item.disabled}
                  >
                    {item.leftIcon && <Icon name={item.leftIcon} size="sm" />}
                    <span className="esolidar-dropdown__item--text">{item.text}</span>
                    {item.rightIcon && <Icon name={item.rightIcon} size="sm" />}
                  </DropdownBTS.Item>
                }
                overlay={<span>{item.tooltip?.overlay}</span>}
                placement={item.tooltip?.placement}
                displayNone={item.tooltip?.displayNone}
              />
            );
          }
          if (item.show)
            return (
              <DropdownBTS.Item
                key={item.id}
                className="esolidar-dropdown__item"
                href={item.href}
                onClick={() => handleClick(item)}
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
