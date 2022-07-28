import * as React from 'react';

const SvgArchive = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill={props.color} d="M6.75 8a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V1.75ZM2.5 13.5v-7h11v7h-11Zm0-8.5h11V2.5h-11V5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArchive;
