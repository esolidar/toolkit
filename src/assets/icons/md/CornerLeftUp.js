import * as React from 'react';

const SvgCornerLeftUp = props => (
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
      d="M9.5 2a1 1 0 0 1 .743.331l4.5 5a1 1 0 1 1-1.486 1.338L10.5 5.606V15a5 5 0 0 0 5 5H19a1 1 0 1 1 0 2h-3.5a7 7 0 0 1-7-7V5.606L5.743 8.669a1 1 0 0 1-1.486-1.338l4.5-5A1 1 0 0 1 9.5 2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerLeftUp;
