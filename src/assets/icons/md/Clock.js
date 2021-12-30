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
      d="M13 8.538a1 1 0 1 0-2 0V12a1 1 0 0 0 .24.65l3.519 4.105a1 1 0 1 0 1.518-1.302L13 11.63V8.538z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM6.343 6.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 6.343 6.343z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgClock;
