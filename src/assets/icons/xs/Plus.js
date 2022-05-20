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
      fill="#6C7679"
      d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.752a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.252a.75.75 0 1 0 0-1.5H6.5V1.75Z"
    />
  </svg>
);

export default SvgPlus;
