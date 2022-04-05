import * as React from 'react';

const SvgDragHorizontal = props => (
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
      d="M4.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM21 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM14.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
  </svg>
);

export default SvgDragHorizontal;
