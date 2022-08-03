import * as React from 'react';

const SvgCheckCircle = props => (
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
      d="M10.239 2.976A5.5 5.5 0 1 0 13.5 8.003V7.43a.75.75 0 0 1 1.5 0v.575a7.002 7.002 0 0 1-9.426 6.562 7 7 0 1 1 5.275-12.96.75.75 0 1 1-.61 1.37Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M14.77 2.21a.75.75 0 0 1 .02 1.06l-6.25 6.5a.75.75 0 0 1-1.097-.018l-2.25-2.5a.75.75 0 1 1 1.114-1.004L8.018 8.15l5.692-5.92a.75.75 0 0 1 1.06-.02Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCheckCircle;
