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
      d="M21.382 2.074a1 1 0 0 1 .325.219 1 1 0 0 1 0 1.42l-4.3 4.29h3.59a1 1 0 0 1 0 2h-6a1 1 0 0 1-.38-.08 1 1 0 0 1-.54-.54 1 1 0 0 1-.08-.38v-6a1 1 0 1 1 2 0v3.59l4.29-4.3a.999.999 0 0 1 1.095-.219ZM9.383 14.077a1 1 0 0 1 .54.54 1 1 0 0 1 .08.38v6a1 1 0 0 1-2 0v-3.59l-4.29 4.3a1.001 1.001 0 0 1-1.639-.325 1 1 0 0 1 .219-1.095l4.3-4.29h-3.59a1 1 0 0 1 0-2h6a1 1 0 0 1 .38.08Z"
    />
  </svg>
);

export default SvgMinimize2;
