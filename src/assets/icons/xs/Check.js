import * as React from 'react';

const SvgCheck = props => (
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
      d="M10.503 2.444a.75.75 0 0 1 .053 1.06L5.394 9.21a1.59 1.59 0 0 1-.538.397 1.625 1.625 0 0 1-1.315.007 1.574 1.574 0 0 1-.546-.394L1.443 7.503a.75.75 0 0 1 1.114-1.006l1.557 1.725a.076.076 0 0 0 .026.018.125.125 0 0 0 .1 0 .074.074 0 0 0 .026-.018l.01-.012 5.168-5.713a.75.75 0 0 1 1.06-.053Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCheck;
