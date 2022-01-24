import * as React from 'react';

const SvgItalic = props => (
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
      d="M21 2H9a1 1 0 0 0 0 2h4.61L8.28 20H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-4.61l5.33-16H21a1 1 0 1 0 0-2z"
    />
  </svg>
);

export default SvgItalic;
