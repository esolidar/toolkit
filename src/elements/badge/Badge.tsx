import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Icon from '../../components/icon';
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
  type = 'span',
  onClick,
}: Props): JSX.Element => {
  const classes = [
    'badge',
    `badge__${extraClass}`,
    `badge__${size}`,
    fullWidth ? 'full-width' : '',
    type === 'button' ? 'cursor-pointer' : '',
    className,
  ];

  return (
    <>
      {type === 'button' ? (
        <button
          data-testid={dataTestId}
          className={classes.join(' ')}
          style={style}
          onClick={onClick}
        >
          {icon && <Icon iconClass={icon} dataTestId={iconDataTestId} />}
          {text && <FormattedMessage id={text} />}
          {plaintext && plaintext}
        </button>
      ) : (
        <span data-testid={dataTestId} className={classes.join(' ')} style={style}>
          {icon && <Icon iconClass={icon} dataTestId={iconDataTestId} />}
          {text && <FormattedMessage id={text} />}
          {plaintext && plaintext}
        </span>
      )}
    </>
  );
};

export default Badge;
