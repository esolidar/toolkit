import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const BoxInfo = ({
  button, className, style, text,
}) => (
  <div className={`box box-info ${className}`} style={style}>
    <p className="text">
      {text}
    </p>
    {button && (
      <div className="button">
        <Button
          extraClass={`${button.style ? button.style : 'success'}`}
          onClick={button.onClick}
          href={button.href}
          text={button.text}
          to={button.to}
          disabled={button.disabled}
        />
      </div>
    )}
  </div>
);

BoxInfo.propTypes = {
  button: PropTypes.shape({
    style: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

BoxInfo.defaultValues = {
  className: '',
};

export default BoxInfo;
