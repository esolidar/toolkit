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
      d="M3.25 1h9.5a.75.75 0 0 1 .536 1.274l-2.88 2.948 2.88 2.948a.75.75 0 0 1-.536 1.274H4v4.806a.75.75 0 0 1-1.5 0V1.75A.75.75 0 0 1 3.25 1ZM4 7.944h6.969L8.82 5.746a.75.75 0 0 1 0-1.048L10.969 2.5H4v5.444Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFlag;
