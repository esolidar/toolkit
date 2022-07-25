import * as React from 'react';

const SvgGoDown = props => (
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
      d="M8.75 3.753a.75.75 0 1 0-1.5 0v7.19L4.197 7.89a.75.75 0 0 0-1.06 1.06l4.333 4.334a.749.749 0 0 0 1.06 0l4.334-4.334a.75.75 0 1 0-1.061-1.06L8.75 10.943v-7.19Z"
    />
  </svg>
);

export default SvgGoDown;
