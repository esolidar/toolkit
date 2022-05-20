import * as React from 'react';

const SvgCopy = props => (
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
      d="M4.293 4.293A1 1 0 0 1 5 4h11.846a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v11.846a1 1 0 1 0 2 0V5a1 1 0 0 1 .293-.707Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M7 6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 14V8h12v12H8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCopy;
