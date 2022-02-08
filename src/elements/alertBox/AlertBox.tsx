import classNames from 'classnames';
import React, { FC } from 'react';
import Icon from '../icon';
import Props from './AlertBox.types';

const iconMap = {
  success: 'CheckCircle',
  warning: 'AlertTriangle',
  danger: 'X',
  info: 'Info',
};

const AlertBox: FC<Props> = ({
  title,
  status = 'success',
  subtitle,
  dataTestId = 'alertBox-component',
  extraClass = 'default',
  style,
  icon,
}: Props): JSX.Element => {
  const classes = classNames('alertBox', `alertBox__${status}`, `alertBox__${extraClass}`);

  return (
    <div data-testid={dataTestId} className={classes} style={style} role="alert">
      <Icon
        className="alertBox__img"
        name={icon || iconMap[status]}
        data-testid={icon || iconMap[status]}
      />
      <div className="alertBox__text">
        {title && <p className="alertBox__text--title">{title}</p>}
        {subtitle && <span className="alertBox__text--subtitle">{subtitle}</span>}
      </div>
    </div>
  );
};

export default AlertBox;
