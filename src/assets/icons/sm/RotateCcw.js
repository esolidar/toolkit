import * as React from 'react';

const SvgRotateCcw = props => (
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
      fillRule="evenodd"
      d="M7.825 2.283A.75.75 0 0 0 6.77 1.217L3.962 3.995a.75.75 0 0 0 .002 1.068L6.77 7.839a.75.75 0 1 0 1.055-1.067l-1.51-1.494H8a4.2 4.2 0 0 1 2.317.695 4.123 4.123 0 0 1 1.532 1.845c.314.75.396 1.576.236 2.371a4.094 4.094 0 0 1-1.137 2.104 4.183 4.183 0 0 1-2.134 1.128 4.216 4.216 0 0 1-2.41-.235 4.154 4.154 0 0 1-1.87-1.516 4.073 4.073 0 0 1-.699-2.281.75.75 0 0 0-1.5 0c0 1.112.333 2.197.957 3.12a5.653 5.653 0 0 0 2.543 2.065 5.715 5.715 0 0 0 3.269.319 5.682 5.682 0 0 0 2.899-1.534 5.595 5.595 0 0 0 1.553-2.874 5.57 5.57 0 0 0-.323-3.246 5.623 5.623 0 0 0-2.089-2.518A5.704 5.704 0 0 0 8 3.778H6.314l1.511-1.495z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgRotateCcw;
