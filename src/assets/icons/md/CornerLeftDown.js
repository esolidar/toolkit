import * as React from 'react';

const SvgCornerLeftDown = props => (
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
      d="M15.5 2H19a1 1 0 1 1 0 2h-3.5a5 5 0 0 0-5 5v9.394l2.757-3.063a1 1 0 1 1 1.486 1.338l-4.5 5a1 1 0 0 1-1.486 0l-4.5-5a1 1 0 0 1 1.486-1.338L8.5 18.394V9a7 7 0 0 1 7-7Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerLeftDown;
