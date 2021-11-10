import classNames from 'classnames';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Icon from '../icon';
import Props from './Menu.types';

const Menu: FC<Props> = ({
  className,
  dataTestId = 'badge-component',
  extraClass = 'default',
  fullWidth,
  style,
  text,
  plaintext,
  icon,
  iconDataTestId = 'badge-component-icon',
  size = 'sm',
  type = 'span',
  onClick,
}: Props): JSX.Element => {
  const intl = useIntl();
  const classes = classNames(
    'badge',
    `badge__${extraClass}`,
    `badge__${size}`,
    { 'full-width': fullWidth },
    { 'cursor-pointer': type === 'button' },
    className
  );

  return (
    <>
      {type === 'button' ? (
        <button data-testid={dataTestId} className={classes} style={style} onClick={onClick}>
          {icon && <Icon iconClass={icon} dataTestId={iconDataTestId} />}
          {text && <span>{intl.formatMessage({ id: text })}</span>}
          {plaintext && plaintext}
        </button>
      ) : (
        <span data-testid={dataTestId} className={classes} style={style}>
          {icon && <Icon iconClass={icon} dataTestId={iconDataTestId} />}
          {text && <span>{intl.formatMessage({ id: text })}</span>}
          {plaintext && plaintext}
        </span>
      )}
    </>
  );
};

export default Menu;
