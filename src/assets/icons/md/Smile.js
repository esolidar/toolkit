import * as React from 'react';

const SvgSmile = props => (
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
      d="M8.902 14.07a1 1 0 1 0-1.804.86A5.373 5.373 0 0 0 9.1 17.17a5.471 5.471 0 0 0 5.798 0 5.373 5.373 0 0 0 2.003-2.24 1 1 0 1 0-1.804-.86 3.374 3.374 0 0 1-1.259 1.404 3.471 3.471 0 0 1-3.678 0 3.374 3.374 0 0 1-1.259-1.405ZM8 9.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm5.44 1.06a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM6.343 6.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 6.343 6.343Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSmile;
