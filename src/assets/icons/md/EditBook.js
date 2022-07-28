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
      d="M2.879 2.879A3 3 0 0 1 5 2h7a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M18 2a1 1 0 0 1 .858.486l3 5A1 1 0 0 1 22 8v10a4 4 0 1 1-8 0V8a1 1 0 0 1 .143-.514l3-5A1 1 0 0 1 18 2Zm-2 6.277V18a2 2 0 0 0 4 0V8.277l-2-3.333-2 3.333Z"
      clipRule="evenodd"
    />
    <path fill={props.color} d="M7 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H7Z" />
  </svg>
);

export default SvgEditBook;
