import * as React from 'react';

const SvgSection = props => (
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
      d="M5 4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-6v16h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V4H5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSection;
