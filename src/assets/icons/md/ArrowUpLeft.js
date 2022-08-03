import * as React from 'react';

const SvgArrowUpLeft = props => (
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
      d="M5 13.778a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7.778a1 1 0 1 1 0 2H7.414l12.293 12.293a1 1 0 0 1-1.414 1.414L6 7.414v5.364a1 1 0 0 1-1 1Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowUpLeft;
