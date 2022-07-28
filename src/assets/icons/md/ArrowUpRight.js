import * as React from 'react';

const SvgArrowUpRight = props => (
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
      d="M10.222 5a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v7.778a1 1 0 1 1-2 0V7.414L5.707 19.707a1 1 0 0 1-1.414-1.414L16.586 6h-5.364a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowUpRight;
