import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const CustomToggle = forwardRef(({ onClick, children }, ref) => (
  <div
    className="esolidar-dropdown__toggle"
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
    onKeyDown={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </div>
));

CustomToggle.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default CustomToggle;
