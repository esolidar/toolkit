import * as React from 'react';

const SvgHourGlass = props => (
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
      d="M3 3a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-2v3a6 6 0 0 1-2.683 5A6 6 0 0 1 18 17v3h2a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2v-3a6 6 0 0 1 2.683-5A6 6 0 0 1 6 7V4H4a1 1 0 0 1-1-1Zm5 17h8v-3a4 4 0 1 0-8 0v3ZM8 4h8v3a4 4 0 1 1-8 0V4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgHourGlass;
