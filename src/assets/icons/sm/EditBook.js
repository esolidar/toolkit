import * as React from 'react';

const SvgEditBook = props => (
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
      d="M11.75 1a.75.75 0 0 1 .639.357l2 3.25A.75.75 0 0 1 14.5 5v6.75a2.77 2.77 0 0 1-2.75 2.75A2.77 2.77 0 0 1 9 11.75V5a.75.75 0 0 1 .111-.393l2-3.25A.75.75 0 0 1 11.75 1ZM10.5 5.212v6.538c0 .675.575 1.25 1.25 1.25A1.27 1.27 0 0 0 13 11.75V5.212l-1.25-2.031-1.25 2.031ZM1 3.083C1 1.943 1.943 1 3.083 1H8.25a.75.75 0 0 1 0 1.5H3.083a.597.597 0 0 0-.583.583v9.334c0 .312.271.583.583.583H7.25a.75.75 0 0 1 0 1.5H3.083A2.096 2.096 0 0 1 1 12.417V3.083Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4 6.75A.75.75 0 0 1 4.75 6h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 4 6.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEditBook;
