import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup as BSButtonGroup, Button } from 'react-bootstrap';

const ButtonGroup = ({
  buttonList,
  className,
  size,
  style,
}) => (
  <BSButtonGroup className={`${className} button-group`} size={size} style={style}>
    {
      buttonList.map((btn) => (
        <Button
          variant=""
          className={`${btn.className} ${btn.isActive ? 'active' : ''}`}
          onClick={btn.onClick}
          style={btn.style}
        >
          {btn.text}
        </Button>
      ))
    }
  </BSButtonGroup>
);

export default ButtonGroup;

ButtonGroup.propTypes = {
  buttonList: PropTypes.array.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};

ButtonGroup.defaultProps = {
  className: '',
  size: 'md',
};
