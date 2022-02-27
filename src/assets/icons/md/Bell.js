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
      d="M19 15.998V9A7 7 0 1 0 5 9v6.998H3a1 1 0 0 0 0 2h2.937L6 18h12c.021 0 .042 0 .063-.002H21a1 1 0 1 0 0-2h-2zM12 4a5 5 0 0 0-5 5v6.998h10V9a5 5 0 0 0-5-5z"
      clipRule="evenodd"
    />
    <path fill={props.color} d="M10 20.998a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z" />
  </svg>
);

export default SvgBell;