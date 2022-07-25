import * as React from 'react';

const SvgAlertCircle = props => (
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
      d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8 4a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 4Z"
      clipRule="evenodd"
    />
    <path fill={props.color} d="M7 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
  </svg>
);

export default SvgAlertCircle;
