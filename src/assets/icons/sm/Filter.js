import * as React from 'react';

const SvgFilter = props => (
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
      d="M1.25 3.75A.75.75 0 0 1 2 3h12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75zm2 4A.75.75 0 0 1 4 7h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75zM6 11a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H6z"
    />
  </svg>
);

export default SvgFilter;
