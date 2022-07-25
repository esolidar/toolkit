import * as React from 'react';

const SvgClock = props => (
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
      d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8 4.942a.75.75 0 0 1 .75.75v1.997l2.03 2.03a.75.75 0 1 1-1.06 1.061L7.47 8.53A.75.75 0 0 1 7.25 8V5.692a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgClock;
