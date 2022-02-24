import * as React from 'react';

const SvgPauseBold = props => (
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
      d="M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h4.464a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75H1.75zm8.036 0a.75.75 0 0 0-.75.75v12.5c0 .414.335.75.75.75h4.464a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75H9.786z"
    />
  </svg>
);

export default SvgPauseBold;
