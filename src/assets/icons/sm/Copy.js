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
      fill={props.color}
      d="M2.687 2.687A.639.639 0 0 1 3.14 2.5h8.226a.75.75 0 0 0 0-1.5H3.14A2.139 2.139 0 0 0 1 3.139v8.226a.75.75 0 0 0 1.5 0V3.14c0-.17.067-.332.187-.452Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4.75 4a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75h-9.5Zm.75 9.5v-8h8v8h-8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCopy;
