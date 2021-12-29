import * as React from 'react';

const SvgX = props => (
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
      d="M10.53 2.53a.75.75 0 1 0-1.06-1.06L6 4.94 2.53 1.47a.75.75 0 0 0-1.06 1.06L4.94 6 1.47 9.47a.75.75 0 1 0 1.06 1.06L6 7.06l3.47 3.47a.75.75 0 1 0 1.06-1.06L7.06 6l3.47-3.47z"
    />
  </svg>
);

export default SvgX;
