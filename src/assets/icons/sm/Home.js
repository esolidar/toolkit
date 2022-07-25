import * as React from 'react';

const SvgHome = props => (
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
      d="M8.54 1.23a.75.75 0 0 0-1.08 0l-6.25 6.5a.75.75 0 1 0 1.08 1.04L3 8.032v6.218c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V8.032l.71.738a.75.75 0 1 0 1.08-1.04l-6.25-6.5Zm2.96 5.243L8 2.833l-3.5 3.64V13.5h2.75V9.75a.75.75 0 0 1 1.5 0v3.75h2.75V6.473Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgHome;
