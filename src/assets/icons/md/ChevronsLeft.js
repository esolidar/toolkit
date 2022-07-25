import * as React from 'react';

const SvgChevronsLeft = props => (
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
      d="M11.724 4.31a1 1 0 0 1-.034 1.414L5.1 12l6.59 6.276a1 1 0 0 1-1.38 1.448l-6.771-6.45-.017-.015a1.778 1.778 0 0 1 0-2.518l.017-.016 6.771-6.45a1 1 0 0 1 1.414.035Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M20.724 4.31a1 1 0 0 1-.034 1.414L14.1 12l6.59 6.276a1 1 0 0 1-1.38 1.448l-6.771-6.45-.017-.015a1.776 1.776 0 0 1 0-2.518l.017-.016 6.771-6.45a1 1 0 0 1 1.414.035Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronsLeft;
