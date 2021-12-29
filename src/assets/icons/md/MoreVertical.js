import * as React from 'react';

const SvgMoreVertical = props => (
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
      d="M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm.586 9.414a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828z"
    />
  </svg>
);

export default SvgMoreVertical;
