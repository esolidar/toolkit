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
      fill={props.color}
      fillRule="evenodd"
      d="m12 9.1 6.276 6.59a1 1 0 0 0 1.448-1.38l-6.45-6.771-.015-.016a1.778 1.778 0 0 0-2.518 0l-.016.016-6.45 6.771a1 1 0 0 0 1.45 1.38L12 9.1Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronUp;
