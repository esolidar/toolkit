import * as React from 'react';

const SvgArrowDownLeft = props => (
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
      fillRule="evenodd"
      d="M19.707 4.293a1 1 0 0 1 0 1.414L7.414 18h5.364a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1v-7.778a1 1 0 1 1 2 0v5.364L18.293 4.293a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowDownLeft;
