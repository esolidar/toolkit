import * as React from 'react';

const SvgCornerUpLeft = props => (
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
      d="M8.743 4.331a1 1 0 0 1-.074 1.412L5.606 8.5H15a7 7 0 0 1 7 7V19a1 1 0 1 1-2 0v-3.5a5 5 0 0 0-5-5H5.606l3.063 2.757a1 1 0 0 1-1.338 1.486l-5-4.5a1 1 0 0 1 0-1.486l5-4.5a1 1 0 0 1 1.412.074Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerUpLeft;
