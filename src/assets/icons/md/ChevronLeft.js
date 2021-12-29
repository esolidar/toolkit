import * as React from 'react';

const SvgChevronLeft = props => (
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
      d="M15.724 4.31a1 1 0 0 1-.034 1.414L9.1 12l6.59 6.276a1 1 0 0 1-1.38 1.448l-6.771-6.45-.016-.015a1.778 1.778 0 0 1 0-2.518l.016-.016 6.771-6.45a1 1 0 0 1 1.414.035z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronLeft;
