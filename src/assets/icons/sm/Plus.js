import * as React from 'react';

const SvgPlus = props => (
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
      d="M8.5 2A.75.75 0 0 0 7 2v5H2a.75.75 0 0 0 0 1.5h5v5.25a.75.75 0 0 0 1.5 0V8.5h5.25a.75.75 0 0 0 0-1.5H8.5V2Z"
    />
  </svg>
);

export default SvgPlus;
