import classNames from 'classnames';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Icon from '../icon';
import Props from './Badge.types';

const Badge: FC<Props> = ({
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
  type = 'default',
  rounded = true,
  onClick,
}: Props): JSX.Element => {
  const intl = useIntl();
  const classes = classNames(
    'badge',
    `type-${type}__${extraClass}`,
    `badge__${size}`,
    { 'full-width': fullWidth },
    { 'cursor-pointer': type === 'button' },
    { squared: !rounded },
    { 'type-default': type === 'default' },
    { 'type-text': type === 'text' },
    { 'with-icon': !!icon },
    className
  );

  return (
    <>
      {type === 'button' ? (
        <button data-testid={dataTestId} className={classes} style={style} onClick={onClick}>
          {icon && <Icon name={icon} data-testid={iconDataTestId} size="sm" />}
          {text && <span>{intl.formatMessage({ id: text })}</span>}
          {plaintext && plaintext}
        </button>
      ) : (
        <div data-testid={dataTestId} className={classes} style={style}>
          <span className="badge__content">
            {icon && <Icon name={icon} data-testid={iconDataTestId} size="sm" />}
            {text && <>{intl.formatMessage({ id: text })}</>}
            {plaintext && plaintext}
          </span>
        </div>
      )}
    </>
  );
};

export default Badge;
