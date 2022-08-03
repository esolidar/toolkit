import * as React from 'react';

const SvgChevronsDown = props => (
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
      d="M8.543 8.642a1.416 1.416 0 0 1-1.546-.309l-.012-.012-5.528-5.804a.75.75 0 1 1 1.086-1.034L8 7.213l5.457-5.73a.75.75 0 0 1 1.086 1.034L9.015 8.321l-.012.012a1.417 1.417 0 0 1-.46.309Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8.543 14.642a1.416 1.416 0 0 1-1.546-.308l-.012-.013-5.528-5.804a.75.75 0 1 1 1.086-1.034L8 13.213l5.457-5.73a.75.75 0 0 1 1.086 1.034l-5.528 5.804-.012.013a1.417 1.417 0 0 1-.46.308Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronsDown;
