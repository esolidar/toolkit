import * as React from 'react';

const SvgRotateCw = props => (
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
      d="M8.169 1.223a.75.75 0 0 1 1.06-.006l2.81 2.778a.75.75 0 0 1 0 1.066l-2.81 2.778a.75.75 0 1 1-1.054-1.067l1.51-1.494H8a4.2 4.2 0 0 0-2.317.695A4.123 4.123 0 0 0 4.15 7.818a4.062 4.062 0 0 0-.236 2.371c.16.796.555 1.528 1.137 2.104a4.183 4.183 0 0 0 2.134 1.128c.81.159 1.648.077 2.41-.235a4.153 4.153 0 0 0 1.87-1.516c.456-.676.699-1.47.699-2.281a.75.75 0 1 1 1.5 0 5.573 5.573 0 0 1-.957 3.12 5.654 5.654 0 0 1-2.543 2.065 5.717 5.717 0 0 1-3.269.319 5.682 5.682 0 0 1-2.899-1.534 5.594 5.594 0 0 1-1.553-2.874 5.562 5.562 0 0 1 .323-3.246 5.623 5.623 0 0 1 2.09-2.519A5.704 5.704 0 0 1 8 3.778h1.686L8.175 2.283a.75.75 0 0 1-.006-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgRotateCw;