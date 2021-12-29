import * as React from 'react';

const SvgShare = props => (
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
      d="M7.483 1.207a.75.75 0 0 1 1.034 0l2.625 2.5a.75.75 0 1 1-1.034 1.086L8.75 3.5V10a.75.75 0 0 1-1.5 0V3.5L5.892 4.793a.75.75 0 1 1-1.034-1.086l2.625-2.5z"
    />
    <path
      fill={props.color}
      d="M2.75 7.25A.75.75 0 0 1 3.5 8v5c0 .12.05.244.152.34.103.099.25.16.41.16h7.875a.593.593 0 0 0 .411-.16.47.47 0 0 0 .152-.34V8A.75.75 0 0 1 14 8v5a1.97 1.97 0 0 1-.617 1.427c-.39.37-.91.573-1.445.573H4.061a2.097 2.097 0 0 1-1.445-.573A1.97 1.97 0 0 1 2 13V8a.75.75 0 0 1 .75-.75z"
    />
  </svg>
);

export default SvgShare;
