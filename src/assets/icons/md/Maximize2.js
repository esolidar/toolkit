import * as React from 'react';

const SvgMaximize2 = props => (
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
      d="M21.38 2.08a1 1 0 0 1 .54.54c.051.12.078.25.08.38v6a1 1 0 0 1-2 0V5.41l-4.29 4.3a1 1 0 0 1-1.639-.325 1 1 0 0 1 .219-1.095L18.59 4H15a1 1 0 1 1 0-2h6a1 1 0 0 1 .38.08ZM9.385 14.071a1 1 0 0 1 .325.219 1 1 0 0 1 0 1.42L5.41 20H9a1 1 0 0 1 0 2H3a.997.997 0 0 1-.38-.08 1 1 0 0 1-.54-.54A1 1 0 0 1 2 21v-6a1 1 0 0 1 2 0v3.59l4.29-4.3a1 1 0 0 1 1.095-.219Z"
    />
  </svg>
);

export default SvgMaximize2;
