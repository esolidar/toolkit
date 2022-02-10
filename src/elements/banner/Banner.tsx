import classNames from 'classnames';
import React, { FC } from 'react';
import isDefined from '../../utils/isDefined';
import Button from '../button';
import Icon from '../icon';
import Props from './Banner.types';

const iconMap = {
  success: 'CheckCircle',
  warning: 'AlertTriangle',
  danger: 'AlertCircle',
  info: 'Info',
};

const Banner: FC<Props> = ({
  title,
  status = 'success',
  subtitle,
  dataTestId = 'banner-component',
  style,
  variant = 'snack-bar',
  primaryButton,
  secondaryButton,
}: Props): JSX.Element => {
  const classes = classNames(
    'banner-component',
    `banner-component__${status}`,
    `banner-component__${variant}`
  );

  const buttonsTheme = status === 'warning' || variant === 'description' ? 'dark' : 'light';

  return (
    <div data-testid={dataTestId} className={classes} style={style} role="alert">
      <div className="banner-component__header">
        <Icon
          className="toast-component__header--icon"
          name={iconMap[status]}
          data-testid={`icon-${iconMap[status]}`}
        />
        {variant === 'snack-bar' ? (
          <>
            {subtitle && <span className="banner-component__subtitle">{subtitle}</span>}
            {primaryButton && (
              <Button
                dataTestId="primaryButton"
                extraClass="secondary"
                text={primaryButton?.label}
                onClick={primaryButton?.onClick}
                size="sm"
                theme={buttonsTheme}
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
          </>
        ) : (
          <>{title && <span className="banner-component__header--title">{title}</span>}</>
        )}
      </div>
      {variant === 'description' && (
        <>
          {subtitle && <span className="banner-component__subtitle">{subtitle}</span>}
          {(isDefined(primaryButton) || isDefined(secondaryButton)) && (
            <div className="banner-component__actions">
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

export default Banner;
