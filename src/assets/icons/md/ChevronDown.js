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
      d="M4.31 8.276a1 1 0 0 1 1.414.034L12 14.895l6.276-6.585a1 1 0 0 1 1.448 1.38l-6.45 6.767-.015.016a1.779 1.779 0 0 1-2.518 0l-.015-.016-6.45-6.767a1 1 0 0 1 .034-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronDown;
