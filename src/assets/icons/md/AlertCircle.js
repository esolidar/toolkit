import * as React from 'react';

const SvgAlertCircle = props => (
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
      d="M12 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm-1.06 10.56a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4.929 4.929A10 10 0 1 1 19.07 19.07 10 10 0 0 1 4.93 4.93ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAlertCircle;
