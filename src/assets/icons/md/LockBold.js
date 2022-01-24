import * as React from 'react';

const SvgLockBold = props => (
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
      d="M6 10V8a6 6 0 1 1 12 0v2h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1zm3.172-4.828A4 4 0 0 1 16 8v2H8V8a4 4 0 0 1 1.172-2.828zM12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgLockBold;
