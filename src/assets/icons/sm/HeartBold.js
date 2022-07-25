import * as React from 'react';

const SvgHeartBold = props => (
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
      d="m8 4.39.796-.938a3.469 3.469 0 0 1 1.995-1.355c.8-.194 1.64-.09 2.373.292.56.318 1.026.785 1.35 1.353.322.567.49 1.214.486 1.872a3.78 3.78 0 0 1-.332 1.552c-.22.487-.54.918-.937 1.264l-5.345 5.398a.537.537 0 0 1-.39.172.524.524 0 0 1-.388-.172L2.269 8.43a3.672 3.672 0 0 1-.937-1.264A3.773 3.773 0 0 1 1 5.614a3.734 3.734 0 0 1 .487-1.872 3.598 3.598 0 0 1 1.349-1.353 3.385 3.385 0 0 1 2.372-.294c.8.194 1.507.673 1.996 1.353L8 4.39Z"
    />
  </svg>
);

export default SvgHeartBold;
