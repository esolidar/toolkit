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
      fill="#6C7679"
      d="M8.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgDragVertical;
