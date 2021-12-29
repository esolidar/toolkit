import * as React from 'react';

const SvgNeeds = props => (
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
      d="M5 2a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5zM4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm-1.121 3.879A3 3 0 0 1 5 10h4a1 1 0 0 1 1 1v2h4v-2a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 .879-2.121zM5 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2H5z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgNeeds;
