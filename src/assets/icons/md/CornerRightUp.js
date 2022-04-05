import * as React from 'react';

const SvgCornerRightUp = props => (
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
      d="M14.5 2a1 1 0 0 1 .743.331l4.5 5a1 1 0 1 1-1.486 1.338L15.5 5.606V15a7 7 0 0 1-7 7H5a1 1 0 1 1 0-2h3.5a5 5 0 0 0 5-5V5.606l-2.757 3.063a1 1 0 0 1-1.486-1.338l4.5-5A1 1 0 0 1 14.5 2z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerRightUp;
