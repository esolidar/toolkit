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
  dataTestId = 'toast-component',
  style,
  variant = 'snack-bar',
  primaryButton,
  secondaryButton,
  onClose,
  boxShadow = false,
}: Props): JSX.Element => {
  const classes = classNames(
    'toast-component',
    `toast-component__${status}`,
    `toast-component__${variant}`,
    { 'toast-component__no-shadow': variant === 'snack-bar' && !boxShadow }
  );

  const buttonsTheme = status === 'warning' || variant === 'description' ? 'dark' : 'light';

  return (
    <div data-testid={dataTestId} className={classes} style={style} role="alert">
      <div className="toast-component__header">
        <Icon
          className="toast-component__header--icon"
          name={iconMap[status]}
          data-testid={`icon-${iconMap[status]}`}
        />
        {title && <span className="toast-component__header--title">{title}</span>}
        {variant === 'snack-bar' && (
          <>
            {subtitle && <span className="toast-component__subtitle">{subtitle}</span>}
            {primaryButton && (
              <Button
                dataTestId="primaryButton"
                extraClass="secondary"
                text={primaryButton?.label}
                onClick={primaryButton?.onClick}
                size="sm"
                ghost
                theme={buttonsTheme}
              />
            )}
          </>
        )}
        {isDefined(onClose) && (
          <Button
            dataTestId="closeButton"
            type="icon"
            extraClass="secondary"
            className="toast-component__header--close"
            onClick={onClose}
            icon={<Icon name="X" size="sm" />}
            size="sm"
            ghost
            theme={buttonsTheme}
          />
        )}
      </div>
      {variant === 'description' && (
        <>
          {subtitle && <span className="toast-component__subtitle">{subtitle}</span>}
          {(isDefined(primaryButton) || isDefined(secondaryButton)) && (
            <div className="toast-component__actions">
              {primaryButton && (
                <Button
                  dataTestId="primaryButton"
                  extraClass="secondary"
                  text={primaryButton?.label}
                  onClick={primaryButton?.onClick}
                  size="sm"
                />
              )}
              {secondaryButton && (
                <Button
                  dataTestId="secondaryButton"
                  extraClass="secondary"
                  text={secondaryButton?.label}
                  onClick={secondaryButton?.onClick}
                  size="sm"
                  ghost
                  theme="dark"
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Toast;
