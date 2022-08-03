import * as React from 'react';

const SvgChevronRight = props => (
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
      d="M4.457 1.483a.75.75 0 0 1 1.06-.026l5.804 5.528.013.012a1.417 1.417 0 0 1 0 2.006l-.013.012-5.804 5.528a.75.75 0 1 1-1.034-1.086L10.213 8l-5.73-5.457a.75.75 0 0 1-.026-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronRight;
