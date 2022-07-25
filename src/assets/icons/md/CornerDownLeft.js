import * as React from 'react';

const SvgCornerDownLeft = props => (
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
      d="M21 4a1 1 0 0 1 1 1v3.5a7 7 0 0 1-7 7H5.606l3.063 2.757a1 1 0 0 1-1.338 1.486l-5-4.5a1 1 0 0 1 0-1.486l5-4.5a1 1 0 1 1 1.338 1.486L5.606 13.5H15a5 5 0 0 0 5-5V5a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerDownLeft;
