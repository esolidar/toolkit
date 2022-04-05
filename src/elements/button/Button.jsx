import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading';

const Button = React.forwardRef(
  (
    {
      className,
      dataTestId,
      disabled,
      extraClass,
      fullWidth,
      href,
      icon,
      iconLeft,
      iconRight,
      id,
      onClick,
      rel,
      size,
      style,
      target,
      text,
      to,
      type,
      badge,
      withLoading,
      isLoading,
      ghost,
      theme,
    },
    ref
  ) => {
    let getType;
    if (type === 'icon') getType = 'icon';
    else if (onClick) getType = 'button';
    else if (type === 'submit') getType = 'submit';
    else if (to) getType = 'link';

    const classes = classnames(
      'btn-esolidar',
      `btn-${extraClass}`,
      `btn-${size}`,
      { [`btn-ghost btn-ghost-${theme}`]: ghost },
      { 'btn-icon': type === 'icon' },
      { 'full-width': fullWidth },
      { disabled: disabled || isLoading },
      className,
      {
        'client__primary--background-color client__primary--border-color client__primary--background-color-hover client__primary--border-color-hover':
          extraClass === 'primary-full',
      },
      {
        'client__primary--border-color client__primary--border-color-hover client__primary--background-color-hover':
          extraClass === 'primary',
      },
      {
        'client__secondary--background-color client__secondary--border-color client__secondary--background-color-hover client__secondary--border-color-hover':
          extraClass === 'info-full',
      },
      {
        'client__secondary--border-color client__secondary--border-color-hover client__secondary--background-color-hover':
          extraClass === 'info',
      },
      { 'client__primary--color client__primary--color-hover': extraClass === 'link' }
    );

    const white = extraClass
      ? (extraClass.includes('-full') || extraClass.includes('negative')) && !ghost
      : false;

    const renderButton = () => {
      switch (getType) {
        case 'button':
          return (
            <button
              ref={ref}
              data-testid={dataTestId}
              id={id}
              type="button"
              onClick={onClick}
              className={classes}
              disabled={disabled || isLoading}
              style={style}
            >
              {withLoading && (
                <Loading
                  loadingClass={classnames('small-loading', { setVisible: isLoading })}
                  size="xs"
                  white={white}
                />
              )}
              <span className={classnames('wrapper', { setInvisible: isLoading })}>
                {(icon || iconLeft) && (
                  <span className="btn-esolidar__icon-left">
                    {icon}
                    {iconLeft}
                  </span>
                )}
                <span className="text">{text}</span>
                {iconRight && <span className="btn-esolidar__icon-right">{iconRight}</span>}
                {badge && <span className="btn-esolidar__badge">{badge}</span>}
              </span>
            </button>
          );
        case 'icon':
          return (
            <button
              ref={ref}
              data-testid={dataTestId}
              id={id}
              type="button"
              onClick={onClick}
              className={classes}
              disabled={disabled || isLoading}
              style={style}
            >
              {withLoading && (
                <Loading
                  loadingClass={isLoading ? 'small-loading d-block' : 'small-loading'}
                  size="xs"
                  white={white}
                />
              )}
              <span className={isLoading ? 'wrapper invisible' : 'wrapper'}>
                {icon && <span className="btn-esolidar__icon">{icon}</span>}
              </span>
            </button>
          );

        case 'submit':
          return (
            <button
              ref={ref}
              data-testid={dataTestId}
              id={id}
              type="submit"
              className={classes}
              disabled={disabled || isLoading}
              style={style}
            >
              {withLoading && (
                <Loading
                  loadingClass={isLoading ? 'small-loading d-block' : 'small-loading'}
                  size="xs"
                  white={white}
                />
              )}
              <span className={isLoading ? 'wrapper invisible' : 'wrapper'}>
                {(icon || iconLeft) && (
                  <span className="btn-esolidar__icon-left">
                    {icon}
                    {iconLeft}
                  </span>
                )}
                <span className="text">{text}</span>
                {iconRight && <span className="btn-esolidar__icon-right">{iconRight}</span>}
                {badge && <span className="btn-esolidar__badge">{badge}</span>}
              </span>
            </button>
          );

        case 'link':
          return (
            <Link data-testid={dataTestId} id={id} to={to} className={classes} style={style}>
              {withLoading && (
                <Loading
                  loadingClass={isLoading ? 'small-loading d-block' : 'small-loading'}
                  size="xs"
                  white={white}
                />
              )}
              <span className={isLoading ? 'wrapper invisible' : 'wrapper'}>
                {(icon || iconLeft) && (
                  <span className="btn-esolidar__icon-left">
                    {icon}
                    {iconLeft}
                  </span>
                )}
                <span className="text">{text}</span>
                {iconRight && <span className="btn-esolidar__icon-right">{iconRight}</span>}
                {badge && <span className="btn-esolidar__badge">{badge}</span>}
              </span>
            </Link>
          );

        default:
          return (
            <a
              data-testid={dataTestId}
              id={id}
              href={href}
              target={target || '_self'}
              rel={rel}
              className={classes}
              style={style}
            >
              {withLoading && (
                <Loading
                  loadingClass={isLoading ? 'small-loading d-block' : 'small-loading'}
                  size="xs"
                  white={white}
                />
              )}
              <div className={isLoading ? 'wrapper invisible' : 'wrapper'}>
                {(icon || iconLeft) && (
                  <span className="btn-esolidar__icon-left">
                    {icon}
                    {iconLeft}
                  </span>
                )}
                <span className="text">{text}</span>
                {iconRight && <span className="btn-esolidar__icon-right">{iconRight}</span>}
                {badge && <span className="btn-esolidar__badge">{badge}</span>}
              </div>
            </a>
          );
      }
    };

    return renderButton();
  }
);

Button.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  extraClass: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  style: PropTypes.object,
  target: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string,
  type: PropTypes.string,
  badge: PropTypes.node,
  withLoading: PropTypes.bool,
  isLoading: PropTypes.bool,
  ghost: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.defaultProps = {
  className: '',
  fullWidth: false,
  size: 'md',
  type: 'button',
  withLoading: false,
  isLoading: false,
  ghost: false,
  theme: 'light',
};

export default Button;
