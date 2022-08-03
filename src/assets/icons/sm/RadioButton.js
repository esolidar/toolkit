import * as React from 'react';

const SvgRadioButton = props => (
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
      d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M6.852 5.228a3 3 0 1 1 2.296 5.544 3 3 0 0 1-2.296-5.544ZM8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgRadioButton;
