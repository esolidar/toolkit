import * as React from 'react';

const SvgCheck = props => (
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
      d="m2 7 1.553 1.72a.824.824 0 0 0 .288.208.875.875 0 0 0 .707-.004.823.823 0 0 0 .285-.211L10 3"
    />
  </svg>
);

export default SvgCheck;
