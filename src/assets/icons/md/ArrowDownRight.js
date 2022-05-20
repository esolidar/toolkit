import * as React from 'react';

const SvgArrowDownRight = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 0 1 1.414 0L18 16.586v-5.364a1 1 0 1 1 2 0V19a1 1 0 0 1-1 1h-7.778a1 1 0 1 1 0-2h5.364L4.293 5.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowDownRight;
