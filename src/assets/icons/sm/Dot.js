import * as React from 'react';

const SvgDot = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill={props.color} d="M6.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
  </svg>
);

export default SvgDot;
