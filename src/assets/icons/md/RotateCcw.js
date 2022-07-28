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
      d="M19.39 10.94A8 8 0 0 0 12 6H9.41l2.3-2.29A1.005 1.005 0 0 0 11 1.996a1.004 1.004 0 0 0-.71.294l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L9.41 8H12a6 6 0 0 1 5.54 3.7 5.89 5.89 0 0 1 .34 3.47 6 6 0 0 1-4.71 4.71A6 6 0 0 1 7 17.33 6 6 0 0 1 6 14a1 1 0 0 0-2 0 8 8 0 0 0 4.94 7.39c.97.405 2.01.613 3.06.61a8.27 8.27 0 0 0 1.57-.15 8 8 0 0 0 5.83-10.91h-.01Z"
    />
  </svg>
);

export default SvgRotateCcw;
