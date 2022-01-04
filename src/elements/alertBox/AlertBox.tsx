import classNames from 'classnames';
import React, { FC } from 'react';
import Icon from '../icon';
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
    statusIcon = 'Info';
  } else if (status === 'success') {
    statusIcon = 'CheckCircle';
  } else if (status === 'warning') {
    statusIcon = 'AlertTriangle';
  } else {
    statusIcon = 'X';
  }
  const classes = classNames('alertBox', `alertBox__${status}`, `alertBox__${extraClass}`);

  return (
    <>
      <div data-testid={dataTestId} className={classes} style={style} role="alert">
        <Icon name={icon || statusIcon} data-testid={icon || statusIcon} />
        <div>
          <p>{title}</p>
          <span>{subtitle}</span>
        </div>
      </div>
    </>
  );
};

export default AlertBox;
