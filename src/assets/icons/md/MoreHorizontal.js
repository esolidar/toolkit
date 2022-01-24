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
      d="M2.586 13.414a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zM10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
    />
  </svg>
);

export default SvgMoreHorizontal;
