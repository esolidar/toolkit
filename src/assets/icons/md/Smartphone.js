import * as React from 'react';

const SvgSmartphone = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill={props.color} d="M11 16a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5Zm1 18V4h12v16H6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSmartphone;
