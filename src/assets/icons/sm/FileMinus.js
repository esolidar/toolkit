import * as React from 'react';

const SvgFileMinus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill={props.color} d="M6 10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H6Z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M2.617 1.573c.39-.37.91-.573 1.446-.573H9a.75.75 0 0 1 .525.214l4.25 4.167a.75.75 0 0 1 .225.536V13a1.97 1.97 0 0 1-.617 1.427c-.39.37-.91.573-1.445.573H4.061a2.097 2.097 0 0 1-1.445-.573A1.97 1.97 0 0 1 2 13V3c0-.543.227-1.055.617-1.427Zm1.446.927a.597.597 0 0 0-.411.16A.47.47 0 0 0 3.5 3v10c0 .12.05.244.152.34.103.099.25.16.41.16h7.875a.593.593 0 0 0 .411-.16.47.47 0 0 0 .152-.34V7H8.25a.75.75 0 0 1-.75-.75V2.5H4.062ZM9 2.8l2.754 2.7H9V2.8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFileMinus;
