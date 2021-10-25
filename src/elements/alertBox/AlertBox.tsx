import classNames from 'classnames';
import React, { FC } from 'react';
import Icon from '../../components/icon';
import Props from './AlertBox.types';

const AlertBox: FC<Props> = ({
  title,
  status,
  subtitle,
  dataTestId = 'alertBox-component',
  extraClass = 'default',
  style,
  icon,
}: Props): JSX.Element => {
  let statusIcon = '';
  if (status === 'info') {
    statusIcon = 'info';
  } else if (status === 'success') {
    statusIcon = 'check-circle';
  } else if (status === 'warning') {
    statusIcon = 'alert-triangle';
  } else {
    statusIcon = 'x-square';
  }
  const classes = classNames('alertBox', `alertBox__${status}`, `alertBox__${extraClass}`);

  return (
    <>
      <div data-testid={dataTestId} className={classes} style={style} role="alert">
        <Icon iconClass={icon || `icon-${statusIcon}`} />
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </>
  );
};

export default AlertBox;
