import * as React from 'react';

const SvgChevronDown = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 6 5.528 5.804a.668.668 0 0 0 .944 0L14 6"
    />
  </svg>
);

export default SvgChevronDown;
