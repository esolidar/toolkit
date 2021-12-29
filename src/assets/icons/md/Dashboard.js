import * as React from 'react';

const SvgDashboard = props => (
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
      d="M4.929 4.929A10 10 0 1 1 19.07 19.07 10 10 0 0 1 4.93 4.93zm.43 11.533A8.004 8.004 0 0 0 12 20a8 8 0 0 0 6.64-3.538H5.36zm6.075-2H4.388a7.997 7.997 0 0 1 1.955-8.119 8 8 0 0 1 13.269 8.119h-5.846l3.246-5.41a1 1 0 1 0-1.716-1.028l-3.862 6.438z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDashboard;
