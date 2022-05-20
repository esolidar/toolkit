import * as React from 'react';

const SvgInfoBold = props => (
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
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm.442-3.058a.625.625 0 0 0 .183-.442v-2a.625.625 0 0 0-1.25 0v2a.625.625 0 0 0 1.067.442Zm-.998-4.11a1 1 0 1 0 1.112-1.664 1 1 0 0 0-1.112 1.663Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgInfoBold;
