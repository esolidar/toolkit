import * as React from 'react';

const SvgInfoBold = props => (
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
      d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1Zm.625 7.5a.625.625 0 0 1-1.25 0v-2a.625.625 0 0 1 1.25 0v2ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
  </svg>
);

export default SvgInfoBold;
