import * as React from 'react';

const SvgSidebarCollapse = props => (
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
      d="M16.707 9.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L14.414 12l2.293-2.293z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M5 22h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3zM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3V4H5zm5 0v16h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSidebarCollapse;
