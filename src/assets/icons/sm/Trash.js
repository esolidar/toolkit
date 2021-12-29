import * as React from 'react';

const SvgTrash = props => (
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
      d="M5 4H2a.75.75 0 0 0 0 1.5h12A.75.75 0 0 0 14 4h-3V2.5c0-.352-.111-.714-.344-1.001A1.302 1.302 0 0 0 9.646 1h-3.29c-.418 0-.776.207-1.012.499C5.111 1.786 5 2.149 5 2.5V4zm1.5 0V2.5h3V4h-3z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M3.87 6.511a.75.75 0 0 1 .869.61L5.86 13.5h4.28l1.121-6.38a.75.75 0 0 1 1.478.26l-1.231 7a.75.75 0 0 1-.739.62H5.231a.75.75 0 0 1-.739-.62l-1.23-7a.75.75 0 0 1 .608-.869z"
    />
  </svg>
);

export default SvgTrash;
