import * as React from 'react';

const SvgSearch = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l4.53 4.531a1 1 0 0 0 1.415-1.414l-4.531-4.531A8.5 8.5 0 0 0 10.5 2ZM5.904 5.904a6.5 6.5 0 1 1 9.192 9.192 6.5 6.5 0 0 1-9.192-9.192Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSearch;
