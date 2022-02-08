import classNames from 'classnames';
import React, { FC } from 'react';
import isDefined from '../../utils/isDefined';
import Button from '../button';
import Icon from '../icon';
import Props from './Toast.types';

const iconMap = {
  success: 'CheckCircle',
  warning: 'AlertTriangle',
  danger: 'AlertCircle',
  info: 'Info',
};

const Toast: FC<Props> = ({
  title,
  status = 'success',
  subtitle,
  dataTestId = 'alertBox-component',
  style,
  variant = 'snack-bar',
  primaryButton,
  secondaryButton,
  onClose,
}: Props): JSX.Element => {
  const classes = classNames(
    'toast-component',
    `toast-component__${status}`,
    `toast-component__${variant}`
  );

  return (
    <div data-testid={dataTestId} className={classes} style={style} role="alert">
      <div className="toast-component__header">
        <Icon name={iconMap[status]} data-testid={iconMap[status]} />
        {title && <span className="toast-component__header--title">{title}</span>}
        {variant === 'snack-bar' && (
          <>
            {subtitle && <span className="toast-component__subtitle">{subtitle}</span>}
            {primaryButton && (
              <Button
                extraClass="ghost"
                text={primaryButton.label}
                onClick={primaryButton.onClick}
              />
            )}
            {secondaryButton && (
              <Button
                extraClass="ghost"
                text={primaryButton.label}
                onClick={primaryButton.onClick}
              />
            )}
          </>
        )}
        {isDefined(onClose) && (
          <Button
            type="icon"
            extraClass="ghost"
            className="toast-component__header--close"
            icon={<Icon name="X" size="sm" />}
          />
        )}
      </div>
      {variant === 'description' && (
        <>
          {subtitle && <span className="toast-component__subtitle">{subtitle}</span>}
          <div className="toast-component__actions">
            {primaryButton && (
              <Button
                extraClass="ghost"
                text={primaryButton.label}
                onClick={primaryButton.onClick}
              />
            )}
            {secondaryButton && (
              <Button
                extraClass="ghost"
                text={primaryButton.label}
                onClick={primaryButton.onClick}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Toast;
