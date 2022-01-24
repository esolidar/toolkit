import * as React from 'react';

const SvgCornerRightDown = props => (
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
      d="M19.669 15.257a1 1 0 0 1 .074 1.412l-4.5 5a1 1 0 0 1-1.486 0l-4.5-5a1 1 0 0 1 1.486-1.338l2.757 3.063V9a5 5 0 0 0-5-5H5a1 1 0 1 1 0-2h3.5a7 7 0 0 1 7 7v9.394l2.757-3.063a1 1 0 0 1 1.412-.074z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerRightDown;
