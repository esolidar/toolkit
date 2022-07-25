import * as React from 'react';

const SvgBellOff = props => (
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
      d="M9.375 2.935A3.25 3.25 0 0 0 4.5 5.752v1.25a.75.75 0 1 1-1.5 0v-1.25a4.751 4.751 0 0 1 7.125-4.116.75.75 0 0 1-.75 1.3ZM12.25 8a.75.75 0 0 1 .75.75v1.75h1.25a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h2.75V8.75a.75.75 0 0 1 .75-.75ZM10 14.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75Zm4.78-11.97a.75.75 0 0 0-1.06-1.06l-12.5 12.5a.75.75 0 1 0 1.06 1.06l12.5-12.5Z"
    />
  </svg>
);

export default SvgBellOff;
