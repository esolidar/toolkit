import * as React from 'react';

const SvgDragVertical = props => (
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
      d="M8.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM10 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM10 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
  </svg>
);

export default SvgDragVertical;
