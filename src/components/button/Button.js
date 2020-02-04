import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
  extraClass, target, href, text, onClick, to, type,
}) => {
  let style;
  if (onClick) {
    style = 'button';
  } else if (type === 'submit') {
    style = 'submit';
  } else if (to) {
    style = 'link';
  }

  const renderButton = () => {
    switch (style) {
      case 'button':
        return (
          <button
            type="button"
            onClick={onClick}
            className={classnames(`btn-esolidar btn-${extraClass}`)}
          >
            {text}
          </button>
        );

      case 'submit':
        return (
          <button
            type="submit"
            className={classnames(`btn-esolidar btn-${extraClass}`)}
          >
            {text}
          </button>
        );

      case 'link':
        return (
          <Link
            to={to}
            className={classnames(`btn-esolidar btn-${extraClass}`)}
          >
            {text}
          </Link>
        );

      default:
        return (
          <a
            href={href}
            target={target || '_self'}
            className={classnames(`btn-esolidar btn-${extraClass}`)}
          >
            {text}
          </a>
        );
    }
  };

  return renderButton();
};

Button.propstyles = {
  extraClass: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
