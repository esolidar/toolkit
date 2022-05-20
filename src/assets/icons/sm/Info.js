import * as React from 'react';

const SvgInfo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      fill="#6C7679"
      d="M7.444 6.831a1 1 0 1 0 1.112-1.663 1 1 0 0 0-1.112 1.663Zm.998 4.111a.625.625 0 0 0 .183-.442v-2a.625.625 0 0 0-1.25 0v2a.625.625 0 0 0 1.067.442Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm-1.5 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgInfo;
