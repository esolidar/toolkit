import * as React from 'react';

const SvgInfoBold = props => (
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
      d="M4.929 4.929A10 10 0 1 1 19.07 19.07 10 10 0 0 1 4.93 4.93zM10.5 8.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM12 11a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgInfoBold;
