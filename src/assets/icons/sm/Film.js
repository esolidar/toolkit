import * as React from 'react';

const SvgFilm = props => (
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
      d="M11.255 10.15a.75.75 0 0 0 0-1.3L7.13 6.47a.75.75 0 0 0-1.125.65v4.763a.75.75 0 0 0 1.125.65l4.125-2.383Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V1.75Zm1.5.75V4h2.476l.6-1.5H2.5Zm4.691 0-.6 1.5h2.385l.6-1.5H7.19ZM13.5 4h-2.909l.6-1.5H13.5V4Zm-11 9.5v-8h11v8h-11Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFilm;
