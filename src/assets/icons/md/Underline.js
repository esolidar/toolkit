import * as React from 'react';

const SvgUnderline = props => (
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
      d="M7 3a1 1 0 0 0-2 0v8a7 7 0 1 0 14 0V3a1 1 0 1 0-2 0v8a5 5 0 1 1-10 0V3ZM4 20a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z"
    />
  </svg>
);

export default SvgUnderline;
