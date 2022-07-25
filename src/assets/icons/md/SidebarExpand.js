import * as React from 'react';

const SvgSidebarExpand = props => (
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
      d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3V4H5Zm5 0v16h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9ZM5 22h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3Zm9.707-13.707a1 1 0 1 0-1.414 1.414L15.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSidebarExpand;
