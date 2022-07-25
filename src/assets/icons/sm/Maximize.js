import * as React from 'react';

const SvgMaximize = props => (
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
      d="M1 2.211C1 1.552 1.552 1 2.211 1H6.25a.75.75 0 0 1 0 1.5H2.5v3.75a.75.75 0 0 1-1.5 0V2.211Zm8-.461A.75.75 0 0 1 9.75 1h4.039C14.448 1 15 1.552 15 2.211V6.25a.75.75 0 0 1-1.5 0V2.5H9.75A.75.75 0 0 1 9 1.75ZM14.25 9a.75.75 0 0 1 .75.75v4.039c0 .659-.552 1.211-1.211 1.211H9.75a.75.75 0 0 1 0-1.5h3.75V9.75a.75.75 0 0 1 .75-.75ZM1.75 9a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5H2.211A1.224 1.224 0 0 1 1 13.789V9.75A.75.75 0 0 1 1.75 9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMaximize;
