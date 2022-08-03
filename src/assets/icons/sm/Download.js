import * as React from 'react';

const SvgDownload = props => (
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
      d="M8 1a.75.75 0 0 1 .75.75v6.19l1.386-1.387a.75.75 0 0 1 1.061 1.06L8.53 10.28a.75.75 0 0 1-1.06 0L4.803 7.614a.75.75 0 0 1 1.06-1.061L7.25 7.939V1.75A.75.75 0 0 1 8 1Zm-6 9.333a.75.75 0 0 1 .75.75v1.334a.583.583 0 0 0 .583.583h9.334a.583.583 0 0 0 .583-.583v-1.334a.75.75 0 0 1 1.5 0v1.334a2.083 2.083 0 0 1-2.083 2.083H3.333a2.083 2.083 0 0 1-2.083-2.083v-1.334a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDownload;
