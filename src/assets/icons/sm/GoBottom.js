import * as React from 'react';

const SvgGoBottom = props => (
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
      d="M8 11.503a.753.753 0 0 0 .53-.22l4.334-4.333a.75.75 0 1 0-1.061-1.06L8.75 8.943v-7.19a.75.75 0 1 0-1.5 0v7.19L4.197 5.89a.75.75 0 0 0-1.06 1.06l4.332 4.334a.748.748 0 0 0 .53.22ZM2 13a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H2Z"
    />
  </svg>
);

export default SvgGoBottom;
