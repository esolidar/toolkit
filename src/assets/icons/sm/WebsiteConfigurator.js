import * as React from 'react';

const SvgWebsiteConfigurator = props => (
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
      d="M1 1.75A.75.75 0 0 1 1.75 1h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 1 6.25v-4.5Zm1.5.75v3h3v-3h-3ZM8 13.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0-3a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM11.5 1a.75.75 0 0 1 .64.359l2.75 4.5A.75.75 0 0 1 14.25 7h-5.5a.75.75 0 0 1-.64-1.141l2.75-4.5A.75.75 0 0 1 11.5 1Zm-1.413 4.5h2.826L11.5 3.188 10.087 5.5ZM1.879 9.879A3 3 0 1 1 6.12 14.12a3 3 0 0 1-4.24-4.24ZM4 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgWebsiteConfigurator;
