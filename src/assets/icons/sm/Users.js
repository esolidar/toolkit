import * as React from 'react';

const SvgUsers = props => (
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
      d="M3.879 1.879A3 3 0 1 1 8.12 6.12a3 3 0 0 1-4.24-4.24ZM6 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.872-.708a.75.75 0 0 1 1.054-.117 3.084 3.084 0 0 1-.396 5.086.75.75 0 0 1-.745-1.302 1.584 1.584 0 0 0 .204-2.613.75.75 0 0 1-.117-1.054ZM2.464 9.464A5 5 0 0 1 11 13v1.25a.75.75 0 0 1-1.5 0V13a3.5 3.5 0 1 0-7 0v1.25a.75.75 0 0 1-1.5 0V13a5 5 0 0 1 1.464-3.536Zm8.643-1.1a.75.75 0 0 1 1.029-.257c1.336.802 2.614 2.403 2.614 4.143v2a.75.75 0 1 1-1.5 0v-2c0-1.044-.835-2.226-1.886-2.857a.75.75 0 0 1-.257-1.029Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUsers;
