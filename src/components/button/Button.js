import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({
  extraClass, target, href, text, onClick, to,
}) => {
  let type;
  if (onClick) {
    type = 'button';
  } else if (to) {
    type = 'link';
  }

  const renderButton = () => {
    switch (type) {
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

Button.propTypes = {
  extraClass: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
