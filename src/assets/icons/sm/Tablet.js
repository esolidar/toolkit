import * as React from 'react';

const SvgTablet = props => (
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
      d="M2 1.75A.75.75 0 0 1 2.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75V1.75Zm1.5.75v11h9v-11h-9Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M5 4.75A.75.75 0 0 1 5.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 4.75Zm0 3A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Z"
      clipRule="evenodd"
    />
    <path fill={props.color} d="M7 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
  </svg>
);

export default SvgTablet;
