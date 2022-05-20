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
      fill="#6C7679"
      d="M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm.586 9.414a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828Z"
    />
  </svg>
);

export default SvgMoreVertical;
