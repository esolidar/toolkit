import * as React from 'react';

const SvgMinus = props => (
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
      d="M1.002 5.75a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5h-8a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMinus;
