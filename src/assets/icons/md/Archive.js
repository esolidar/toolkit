import * as React from 'react';

const SvgArchive = props => (
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
      d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm18 1v4H4V4h16Zm0 6H4v10h16V10Zm-10 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArchive;
