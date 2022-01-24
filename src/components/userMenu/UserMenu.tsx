import React, { FC, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'react-bootstrap';
import Icon from '../../elements/icon';
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
    <Dropdown.Toggle>
      <img src={companyLogo} alt={companyName} onError={handleError} />
      <Icon name="ChevronDown" />
    </Dropdown.Toggle>
    <Dropdown.Menu flip={flip} align={align}>
      {items.map((item, i) => {
        if (item.isVisible === false) return;
        if (item.isDivider) return <Dropdown.Divider key={item.id} />;
        return (
          <Fragment key={item.id}>
            {item.title && <div className="esolidar-user-menu-title">{item.title}</div>}
            <Dropdown.Item
              key={i}
              className={item.className}
              eventKey={item.eventKey}
              href={item.href}
              onClick={item.onClick}
            >
              {item.plainText ? (
                <div>{item.plainText}</div>
              ) : (
                <FormattedMessage id={item.text || ' '} />
              )}
            </Dropdown.Item>
          </Fragment>
        );
      })}
    </Dropdown.Menu>
  </Dropdown>
);

export default UserMenu;
