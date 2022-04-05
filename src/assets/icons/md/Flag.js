import * as React from 'react';

const SvgFlag = props => (
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
      d="M5 2h14a1 1 0 0 1 .707 1.707L15.414 8l4.293 4.293A1 1 0 0 1 19 14H6v7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm1 10h10.586l-3.293-3.293a1 1 0 0 1 0-1.414L16.586 4H6v8z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFlag;
