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
      d="M3.22 7.836a.75.75 0 0 1 0-1.06L8.776 1.22a.75.75 0 0 1 1.06 0l3.334 3.333a.75.75 0 0 1 0 1.061l-2.23 2.23 3.843 3.878a.75.75 0 0 1-1.066 1.056L9.88 8.905 7.614 11.17a.75.75 0 0 1-1.06 0L3.22 7.836Zm1.59-.53 2.274 2.273 4.495-4.495L9.306 2.81 4.811 7.306Z"
      clipRule="evenodd"
    />
    <path fill={props.color} d="M1.75 13a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" />
  </svg>
);

export default SvgAuction;
