import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
  className,
  dataTestId,
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
            data-testid={dataTestId}
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
            data-testid={dataTestId}
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
          <Link data-testid={dataTestId} id={id} to={to} className={classes.join(' ')}>
            {icon}
            {text}
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
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  target: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  fullWidth: false,
  rounded: true,
  size: 'md',
  type: 'button',
};

export default Button;
