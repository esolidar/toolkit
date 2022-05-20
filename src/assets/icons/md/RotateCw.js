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
      fill="#6C7679"
      d="M4.62 10.94A8 8 0 0 1 12.01 6h2.59l-2.3-2.29a1.004 1.004 0 0 1 1.42-1.42l4 4a.998.998 0 0 1 .21.33 1 1 0 0 1 0 .76.998.998 0 0 1-.21.33l-4 4a.997.997 0 0 1-1.095.219.998.998 0 0 1-.325-.22.998.998 0 0 1 0-1.42L14.6 8h-2.59a6 6 0 0 0-5.54 3.7 5.89 5.89 0 0 0-.34 3.47 6 6 0 0 0 4.71 4.71 6 6 0 0 0 6.17-2.55 6 6 0 0 0 1-3.33 1 1 0 0 1 2 0 8 8 0 0 1-4.94 7.39 7.867 7.867 0 0 1-3.06.61 8.188 8.188 0 0 1-1.57-.15 8 8 0 0 1-5.83-10.91h.01Z"
    />
  </svg>
);

export default SvgRotateCw;
