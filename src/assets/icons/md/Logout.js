import * as React from 'react';

const SvgLogout = props => (
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
      d="M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3.846a1 1 0 1 0-2 0V20H4V4h9v3.846a1 1 0 1 0 2 0V4a2 2 0 0 0-2-2H4Z"
    />
    <path
      fill="#6C7679"
      d="M17.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H9a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
    />
  </svg>
);

export default SvgLogout;
