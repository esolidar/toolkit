import * as React from 'react';

const SvgChevronsLeft = props => (
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
      d="M7.358 8.543a1.416 1.416 0 0 1 .309-1.546l.012-.012 5.804-5.528a.75.75 0 0 1 1.034 1.086L8.787 8l5.73 5.457a.75.75 0 0 1-1.034 1.086L7.679 9.015l-.012-.012a1.416 1.416 0 0 1-.309-.46Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1.358 8.543a1.416 1.416 0 0 1 .309-1.546l.012-.012 5.804-5.528a.75.75 0 1 1 1.034 1.086L2.787 8l5.73 5.457a.75.75 0 0 1-1.034 1.086L1.679 9.015l-.012-.012a1.416 1.416 0 0 1-.309-.46Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronsLeft;
