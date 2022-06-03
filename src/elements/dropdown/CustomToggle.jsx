import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const CustomToggle = forwardRef(({ onClick, children }, ref) => (
  <button
    className="esolidar-dropdown__toggle"
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </button>
));

CustomToggle.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default CustomToggle;
