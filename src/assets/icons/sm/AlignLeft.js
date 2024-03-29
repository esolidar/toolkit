import * as React from 'react';

const SvgAlignLeft = props => (
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
      d="M1.25 2.75A.75.75 0 0 1 2 2h12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0 5A.75.75 0 0 1 2 7h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H2Z"
    />
  </svg>
);

export default SvgAlignLeft;
