import * as React from 'react';

const SvgProjects = props => (
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
      d="M5.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM5 10.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M6.25 1A2.25 2.25 0 0 0 4 3.25V4H1.75a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75H12v-.75A2.25 2.25 0 0 0 9.75 1h-3.5Zm4.25 3v-.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75V4h5Zm-8 9.5v-8h11v8h-11Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgProjects;