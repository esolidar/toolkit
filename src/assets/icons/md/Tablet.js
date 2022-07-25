import * as React from 'react';

const SvgTablet = props => (
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
      d="M9 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm2.94 6.56a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4Zm1 18V4h14v16H5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgTablet;
