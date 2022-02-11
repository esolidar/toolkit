import * as React from 'react';

const SvgShare = props => (
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
      d="m11 4.41-2.29 2.3a1.004 1.004 0 0 1-1.42-1.42l4-4a1 1 0 0 1 .33-.21 1 1 0 0 1 .76 0 1 1 0 0 1 .33.21l4 4a.998.998 0 0 1 0 1.42.999.999 0 0 1-1.42 0L13 4.41V15a1 1 0 1 1-2 0V4.41z"
    />
    <path
      fill={props.color}
      d="M19.293 11.293A1 1 0 0 1 21 12v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a1 1 0 1 1 2 0v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 1 .293-.707z"
    />
  </svg>
);

export default SvgShare;