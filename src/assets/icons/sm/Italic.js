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
      d="M14 1H6a.75.75 0 0 0 0 1.5h2.96L5.46 13H2a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5H7.04l3.5-10.5H14A.75.75 0 0 0 14 1Z"
    />
  </svg>
);

export default SvgItalic;
