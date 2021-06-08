import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'react-bootstrap';
import Props from './UserMenu.types';

const UserMenu: FC<Props> = ({
  align = 'right',
  flip = true,
  companyLogo,
  companyName,
  handleError,
  items,
}: Props): JSX.Element => (
  <Dropdown className="esolidar-user-menu">
    <Dropdown.Toggle role="toggle">
      <img src={companyLogo} alt={companyName} onError={handleError} />
    </Dropdown.Toggle>
    <Dropdown.Menu flip={flip} align={align} role="menu">
      {items.map((item, i) => {
        if (item.isVisible === false) return;
        return (
          <Dropdown.Item
            key={i}
            id={item.id}
            className={item.className}
            eventKey={item.eventKey}
            href={item.href}
            onClick={item.onClick}
          >
            <FormattedMessage id={item.text} />
          </Dropdown.Item>
        );
      })}
    </Dropdown.Menu>
  </Dropdown>
);

export default UserMenu;
