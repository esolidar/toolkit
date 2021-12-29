import * as React from 'react';

const SvgBellOff = props => (
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
      d="M14.5 4.666A5 5 0 0 0 7 8.999v2a1 1 0 1 1-2 0V9a7.001 7.001 0 0 1 10.5-6.066 1 1 0 1 1-1 1.732zM18 12a1 1 0 0 1 1 1v3h2a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h4v-3a1 1 0 0 1 1-1zm-5 10a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zm8.707-19.707a1 1 0 0 1 0 1.414l-18 18a1 1 0 0 1-1.414-1.414l18-18a1 1 0 0 1 1.414 0z"
    />
  </svg>
);

export default SvgBellOff;
