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
      fill={props.color}
      d="M21.707 3.707a1 1 0 0 0-1.414-1.414L12 10.586 3.707 2.293a1 1 0 0 0-1.414 1.414L10.586 12l-8.293 8.293a1 1 0 1 0 1.414 1.414L12 13.414l8.293 8.293a1 1 0 0 0 1.414-1.414L13.414 12l8.293-8.293z"
    />
  </svg>
);

export default SvgX;
