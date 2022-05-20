import * as React from 'react';

const SvgArrowDown = props => (
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
      d="M11.002 3.003v15.59l-3.29-3.3a1.004 1.004 0 1 0-1.42 1.42l5 5a1 1 0 0 0 .33.21 1 1 0 0 0 .76 0 .998.998 0 0 0 .33-.21l5-5a.999.999 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3.29 3.3V3.003a1 1 0 1 0-2 0Z"
    />
  </svg>
);

export default SvgArrowDown;
