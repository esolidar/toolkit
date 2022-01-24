import * as React from 'react';

const SvgPlay = props => (
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
      d="M5.832 2.406a3.386 3.386 0 0 1 3.575.226l9.13 6.499a3.545 3.545 0 0 1 0 5.738l-.007.006-9.122 6.492-.002.002a3.386 3.386 0 0 1-3.574.225l-.007-.004A3.517 3.517 0 0 1 4 18.492V5.508A3.518 3.518 0 0 1 5.825 2.41l.007-.003zm.952 1.758A1.518 1.518 0 0 0 6 5.501v12.998a1.518 1.518 0 0 0 .784 1.337 1.385 1.385 0 0 0 1.46-.095l.002-.002 9.12-6.49a1.546 1.546 0 0 0 0-2.498L8.244 4.26a1.386 1.386 0 0 0-1.46-.095z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPlay;
