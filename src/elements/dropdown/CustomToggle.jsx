import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const CustomToggle = forwardRef(({ id, onClick, children, disabled }, ref) => (
  <div
    className="esolidar-dropdown__toggle"
    ref={ref}
    onClick={e => {
      e.preventDefault();
      if (!disabled) onClick(e);
    }}
    id={id}
    aria-hidden="true"
  >
    {children}
  </div>
));

CustomToggle.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

export default CustomToggle;
