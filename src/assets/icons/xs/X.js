import * as React from 'react';

const SvgX = props => (
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
      d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L4.94 6 2.22 8.72a.75.75 0 0 0 1.06 1.06L6 7.06l2.72 2.72a.75.75 0 0 0 1.06-1.06L7.06 6l2.72-2.72a.75.75 0 0 0-1.06-1.06L6 4.94 3.28 2.22Z"
    />
  </svg>
);

export default SvgX;
