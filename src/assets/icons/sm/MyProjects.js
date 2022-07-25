import * as React from 'react';

const SvgMyProjects = props => (
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
      d="M6.25 1A2.25 2.25 0 0 0 4 3.25V4H1.75a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5H2.5v-8h11v5.75a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75H12v-.75A2.25 2.25 0 0 0 9.75 1h-3.5Zm4.25 3v-.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75V4h5Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M9.25 6a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-.478 1.595a1.25 1.25 0 1 1 .956 2.31 1.25 1.25 0 0 1-.956-2.31Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M9.333 13.67c-.58 0-1.143.107-1.633.303s-.873.468-1.13.768a.75.75 0 0 1-1.14-.975c.44-.514 1.037-.915 1.713-1.186a5.932 5.932 0 0 1 2.19-.41c.759 0 1.512.139 2.19.41.677.27 1.274.672 1.713 1.186a.75.75 0 0 1-1.14.975c-.256-.3-.639-.572-1.13-.768a4.434 4.434 0 0 0-1.633-.303Z"
    />
  </svg>
);

export default SvgMyProjects;
