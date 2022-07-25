import * as React from 'react';

const SvgAuction = props => (
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
      d="M4.601 12.041a1 1 0 0 1 0-1.414l8.334-8.334a1 1 0 0 1 1.414 0l5.001 5a1 1 0 0 1 0 1.415l-3.46 3.46 5.817 5.816a1 1 0 0 1-1.414 1.415l-5.817-5.817-3.46 3.46a1 1 0 0 1-1.414 0l-5-5Zm12.628-4.04-3.458 3.458-.002.001-.002.002-3.458 3.458-3.587-3.586 6.92-6.92 3.587 3.587Z"
      clipRule="evenodd"
    />
    <path fill={props.color} d="M3 20a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H3Z" />
  </svg>
);

export default SvgAuction;
