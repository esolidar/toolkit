import * as React from 'react';

const SvgArrowDown = props => (
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
      d="M8.75 2a.75.75 0 0 0-1.5 0v10.19l-2.053-2.054a.75.75 0 0 0-1.06 1.061L7.47 14.53a.75.75 0 0 0 1.06 0l3.334-3.333a.75.75 0 0 0-1.061-1.06L8.75 12.188V2Z"
    />
  </svg>
);

export default SvgArrowDown;
