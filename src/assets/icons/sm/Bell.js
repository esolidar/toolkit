import * as React from 'react';

const SvgBell = props => (
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
      d="M8 1a5 5 0 0 0-5 5v4.5H1.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H13V6a5 5 0 0 0-5-5Zm3.5 9.5V6a3.5 3.5 0 1 0-7 0v4.5h7Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M6 14.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);

export default SvgBell;
