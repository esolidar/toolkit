import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
  extraClass,
  target,
  href, text,
  onClick,
  to,
  type,
  disabled,
  className,
  icon,
  id,
  size,
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
  extraClass: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  size: 'md',
};

export default Button;
