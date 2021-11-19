import PropTypes from 'prop-types';
import React from 'react';

const CustomToggle = React.forwardRef(({ onClick, children }, ref) => (
  <a
    className="esolidar-dropdown__toggle"
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

CustomToggle.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default CustomToggle;
