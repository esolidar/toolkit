import * as React from 'react';

const SvgUserCircle = props => (
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
      d="M6.852 4.228a3 3 0 1 1 2.296 5.544 3 3 0 0 1-2.296-5.544ZM8 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM4.11 4.11a5.5 5.5 0 0 1 7.926 7.626 5.562 5.562 0 0 0-8.072 0 5.5 5.5 0 0 1 .147-7.625Zm1.018 8.58a5.5 5.5 0 0 0 5.744 0 4.06 4.06 0 0 0-5.744 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUserCircle;
