import * as React from 'react';

const SvgPause = props => (
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
      d="M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h4.464a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75H1.75Zm.75 12.5v-11h2.964v11H2.5ZM9.786 1a.75.75 0 0 0-.75.75v12.5c0 .414.335.75.75.75h4.464a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75H9.786Zm.75 12.5v-11H13.5v11h-2.964Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPause;
