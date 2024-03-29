import * as React from 'react';

const SvgMinimize2 = props => (
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
      d="M10.25 1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.75.75 0 1 1 1.06 1.06L12.06 5h2.19a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75Zm-8.5 8.5a.75.75 0 0 0 0 1.5h2.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06L5 12.06v2.19a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75h-4Z"
    />
  </svg>
);

export default SvgMinimize2;
