import * as React from 'react';

const SvgUserCompany = props => (
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
      d="M4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM4 10.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75ZM4.75 4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1.22 1.22A.75.75 0 0 1 1.75 1h8.5a.75.75 0 0 1 .75.75V7h3.25a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 .22-.53ZM11 13.5v-5h2.5v5H11Zm-1.5-11v11h-7v-11h7Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUserCompany;
