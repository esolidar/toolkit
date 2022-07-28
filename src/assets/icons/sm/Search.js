import * as React from 'react';

const SvgSearch = props => (
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
      d="M6.958 1a5.958 5.958 0 1 0 3.65 10.668l3.112 3.112a.75.75 0 1 0 1.06-1.06l-3.112-3.112A5.958 5.958 0 0 0 6.958 1ZM3.806 3.806a4.458 4.458 0 1 1 6.305 6.305 4.458 4.458 0 0 1-6.305-6.305Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSearch;
