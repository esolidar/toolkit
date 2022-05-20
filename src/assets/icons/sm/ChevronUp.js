import * as React from 'react';

const SvgChevronUp = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      stroke="#6C7679"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 12 8.472 6.196a.667.667 0 0 0-.944 0L2 12"
    />
  </svg>
);

export default SvgChevronUp;
