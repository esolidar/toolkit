import * as React from 'react';

const SvgArrowLeft = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      fill={props.color}
      d="M21 11H5.41l3.3-3.29a1.004 1.004 0 0 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a.998.998 0 0 0 1.42 0 .999.999 0 0 0 0-1.42L5.41 13H21a1 1 0 1 0 0-2z"
    />
  </svg>
);

export default SvgArrowLeft;
