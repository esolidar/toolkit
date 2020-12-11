import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const BoxInfo = ({ text, button }) => (
  <div className="box">
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
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({
    style: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
  }),
};

export default BoxInfo;
