import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const CustomToggle = forwardRef(({ id, onClick, children }, ref) => (
  <div
    className="esolidar-dropdown__toggle"
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
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
  children: PropTypes.any,
};

export default CustomToggle;
