import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
  className,
  disabled,
  extraClass,
  fullWidth,
  href,
  icon,
  id,
  onClick,
  rel,
  rounded,
  size,
  target,
  text,
  to,
  type,
}) => {
  let style;
  if (onClick) {
    style = 'button';
  } else if (type === 'submit') {
    style = 'submit';
  } else if (to) {
    style = 'link';
  }

  const classes = [
    'btn-esolidar',
    `btn-${extraClass}`,
    `btn-${size}`,
    rounded ? 'rounded' : '',
    fullWidth ? 'full-width' : '',
    disabled ? 'disabled' : '',
    className,
  ];

  const renderButton = () => {
    switch (style) {
      case 'button':
        return (
          <button
            id={id}
            type="button"
            onClick={onClick}
            className={classes.join(' ')}
            disabled={disabled}
          >
            {icon}
            {text}
          </button>
        );

      case 'submit':
        return (
          <button
            id={id}
            type="submit"
            className={classes.join(' ')}
            disabled={disabled}
          >
            {icon}
            {text}
          </button>
        );

      case 'link':
        return (
          <Link
            id={id}
            to={to}
            className={classes.join(' ')}
          >
            {icon}
            {text}
          </Link>
        );

      default:
        return (
          <a
            id={id}
            href={href}
            target={target || '_self'}
            rel={rel}
            className={classes.join(' ')}
          >
            {icon}
            {text}
          </a>
        );
    }
  };

  return renderButton();
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  extraClass: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  to: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  fullWidth: false,
  rounded: false,
  size: 'md',
  type: 'button',
};

export default Button;
