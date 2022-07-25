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
      d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM8 2.5a5.5 5.5 0 0 0-5.292 7h4.828L9.58 5.415a.75.75 0 0 1 1.342.67L9.214 9.5h4.077a5.497 5.497 0 0 0-1.402-5.39A5.5 5.5 0 0 0 8 2.5Zm4.61 8.5H3.39a5.501 5.501 0 0 0 9.22 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDashboard;
