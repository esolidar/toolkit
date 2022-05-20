import * as React from 'react';

const SvgCheck = props => (
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
      fillRule="evenodd"
      d="M14.492 2.434a.75.75 0 0 1 .074 1.058L6.497 12.77c-.19.228-.43.41-.697.535a2.074 2.074 0 0 1-1.734.01 2.04 2.04 0 0 1-.708-.53L.934 9.992a.75.75 0 1 1 1.132-.984l2.431 2.8a.572.572 0 0 0 .853-.005l.01-.012 8.074-9.283a.75.75 0 0 1 1.058-.074Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCheck;
