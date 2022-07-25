import * as React from 'react';

const SvgCheckCircle = props => (
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
      d="M10.237 4.197a8 8 0 0 1 5.019.496 1 1 0 1 0 .814-1.827 10 10 0 1 0 5.93 9.14v-.829a1 1 0 0 0-2 0v.828a8 8 0 1 1-9.763-7.808Z"
    />
    <path
      fill={props.color}
      d="M21.707 5.707a1 1 0 0 0-1.414-1.414L12 12.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l9-9Z"
    />
  </svg>
);

export default SvgCheckCircle;
