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
      fill={props.color}
      fillRule="evenodd"
      d="M1.483 5.457a.75.75 0 0 1 1.06.026L8 11.213l5.457-5.73a.75.75 0 0 1 1.086 1.034l-5.528 5.804-.012.013a1.417 1.417 0 0 1-2.006 0l-.012-.013-5.528-5.804a.75.75 0 0 1 .026-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronDown;
