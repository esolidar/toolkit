import * as React from 'react';

const SvgPause = props => (
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
      d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Zm1 14V6h3v12H6Zm8-14a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5Zm1 14V6h3v12h-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPause;
