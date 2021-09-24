import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

// TODO: tests for the new props: iconLeft, iconRight and badge

const Button = ({
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
}) => {
  let getType;
  if (onClick) {
    getType = 'button';
  } else if (type === 'submit') {
    getType = 'submit';
  } else if (to) {
    getType = 'link';
  }

  const classes = classnames(
    'btn-esolidar',
    `btn-${extraClass}`,
    `btn-${size}`,
    { 'full-width': fullWidth },
    { disabled },
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

  const renderButton = () => {
    switch (getType) {
      case 'button':
        return (
          <button
            data-testid={dataTestId}
            id={id}
            type="button"
            onClick={onClick}
            className={classes}
            disabled={disabled}
            style={style}
          >
            {(icon || iconLeft) && (
              <span className="btn-esolidar__icon-left">
                {icon}
                {iconLeft}
              </span>
            )}
            {text}
            {iconRight && <span className="btn-esolidar__icon-right">{iconRight}</span>}
            {badge && <span className="btn-esolidar__badge">{badge}</span>}
          </button>
        );

      case 'submit':
        return (
          <button
            data-testid={dataTestId}
            id={id}
            type="submit"
            className={classes}
            disabled={disabled}
            style={style}
          >
            {(icon || iconLeft) && (
              <span className="btn-esolidar__icon-left">
                {icon}
                {iconLeft}
              </span>
            )}
            {text}
            {iconRight && <span className="btn-esolidar__icon-right">{iconRight}</span>}
            {badge && <span className="btn-esolidar__badge">{badge}</span>}
          </button>
        );

      case 'link':
        return (
          <Link data-testid={dataTestId} id={id} to={to} className={classes} style={style}>
            {(icon || iconLeft) && (
              <span className="btn-esolidar__icon-left">
                {icon}
                {iconLeft}
              </span>
            )}
            {text}
            {iconRight && <span className="btn-esolidar__icon-right">{iconRight}</span>}
            {badge && <span className="btn-esolidar__badge">{badge}</span>}
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
            {(icon || iconLeft) && (
              <span className="btn-esolidar__icon-left">
                {icon}
                {iconLeft}
              </span>
            )}
            {text}
            {iconRight && <span className="btn-esolidar__icon-right">{iconRight}</span>}
            {badge && <span className="btn-esolidar__badge">{badge}</span>}
          </a>
        );
    }
  };

  return renderButton();
};

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
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  style: PropTypes.object,
  target: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string,
  type: PropTypes.string,
  badge: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  fullWidth: false,
  size: 'md',
  type: 'button',
};

export default Button;
