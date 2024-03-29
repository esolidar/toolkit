import * as React from 'react';

const SvgArrowLeft = props => (
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
      d="M14 6.997H3.81l2.05-2a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-3.33 3.28a.82.82 0 0 0-.22.535.78.78 0 0 0 .22.525l3.33 3.34a.79.79 0 0 0 .53.22.75.75 0 0 0 .53-.22.739.739 0 0 0 0-1.06l-2.05-2.06H14a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);

export default SvgArrowLeft;
