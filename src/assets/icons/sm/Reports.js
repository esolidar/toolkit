import * as React from 'react';

const SvgReports = props => (
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
      d="M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V1.75Zm1.5.75v11h11v-11h-11Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4 5.75A.75.75 0 0 1 4.75 5h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 4 5.75Zm7.585 1.33a.75.75 0 0 1 .336 1.005l-1.75 3.5a.75.75 0 0 1-1.006.336L6.61 10.644l-1.372 1.175a.75.75 0 1 1-.976-1.138l1.75-1.5a.75.75 0 0 1 .823-.102l2.33 1.165 1.414-2.83a.75.75 0 0 1 1.006-.335Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgReports;
