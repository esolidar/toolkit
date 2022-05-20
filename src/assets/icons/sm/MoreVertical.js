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
      d="M6.667 3.083a1.333 1.333 0 1 0 2.666 0 1.333 1.333 0 0 0-2.666 0Zm0 4.917a1.333 1.333 0 1 0 2.666 0 1.333 1.333 0 0 0-2.666 0Zm.39 6.026a1.333 1.333 0 1 1 1.885-1.885 1.333 1.333 0 0 1-1.885 1.885Z"
    />
  </svg>
);

export default SvgMoreVertical;
