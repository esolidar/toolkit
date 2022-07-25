import * as React from 'react';

const SvgMapPinBold = props => (
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
      d="M12 2a7 7 0 0 0-7 7c0 5.308 5.986 12.354 6.242 12.65a1.001 1.001 0 0 0 1.516 0C13.014 21.354 19 14.308 19 9a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
    />
  </svg>
);

export default SvgMapPinBold;
