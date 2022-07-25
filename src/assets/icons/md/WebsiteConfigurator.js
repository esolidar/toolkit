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
      d="M2 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm2 1v5h5V4H4Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M13 20a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm1-6a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M17.293 2a1 1 0 0 1 .906.534l3.686 7A1 1 0 0 1 21 11h-7a1 1 0 0 1-.904-1.428l3.314-7A1 1 0 0 1 17.293 2Zm.069 3.237L15.58 9h3.763l-1.981-3.763ZM6.5 13a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-1.768 2.732a2.5 2.5 0 1 1 3.536 3.536 2.5 2.5 0 0 1-3.536-3.536Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgWebsiteConfigurator;
