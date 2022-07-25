import * as React from 'react';

const SvgMeh = props => (
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
      d="M8 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm0-4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm5.44 1.06a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM6.343 6.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 6.343 6.343Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMeh;
