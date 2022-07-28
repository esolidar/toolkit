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
      d="M12.75 6.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM8 6.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm-4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm9.5 5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm-4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm-4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
    />
  </svg>
);

export default SvgDragHorizontal;
