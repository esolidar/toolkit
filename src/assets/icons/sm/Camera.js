import * as React from 'react';

const SvgCamera = props => (
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
      d="M5.338 1.397A.75.75 0 0 1 6 1h4a.75.75 0 0 1 .662.397L11.783 3.5h.967A2.25 2.25 0 0 1 15 5.75v6A2.25 2.25 0 0 1 12.75 14h-9.5A2.25 2.25 0 0 1 1 11.75v-6A2.25 2.25 0 0 1 3.25 3.5h.967l1.121-2.103ZM6.45 2.5 5.328 4.603A.75.75 0 0 1 4.667 5H3.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75h-1.417a.75.75 0 0 1-.661-.397L9.55 2.5h-3.1Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M5.879 6.379a3 3 0 1 1 4.242 4.242A3 3 0 0 1 5.88 6.38ZM8 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCamera;
