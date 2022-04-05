import * as React from 'react';

const SvgEmail = props => (
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
      d="M3 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3zm1 3.293V18h16V7.293l-6.065 4.977a3 3 0 0 1-3.87 0L4 7.293zM18.424 6H5.576l5.779 4.742a1 1 0 0 0 1.29 0L18.424 6z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEmail;
