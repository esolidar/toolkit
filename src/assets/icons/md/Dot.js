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
    <path fill={props.color} d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
  </svg>
);

export default SvgDot;
