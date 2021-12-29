import * as React from 'react';

const SvgMeh = props => (
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
      d="M5 9a.75.75 0 0 0 0 1.5h6A.75.75 0 0 0 11 9H5zm0-3a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm4.293.707a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM4.11 4.11a5.5 5.5 0 1 1 7.78 7.78 5.5 5.5 0 0 1-7.78-7.78z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMeh;
