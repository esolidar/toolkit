import * as React from 'react';

const SvgMoreHorizontal = props => (
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
      d="M13.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
    />
  </svg>
);

export default SvgMoreHorizontal;
