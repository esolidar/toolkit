import * as React from 'react';

const SvgDeleteCircle = props => (
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
      d="M8 2.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM4.995 4.995a4.25 4.25 0 1 1 6.01 6.01 4.25 4.25 0 0 1-6.01-6.01Zm5.535.475a.75.75 0 0 1 0 1.06L9.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06L8 9.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L6.94 8 5.47 6.53a.75.75 0 0 1 1.06-1.06L8 6.94l1.47-1.47a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDeleteCircle;
