import * as React from 'react';

const SvgRadioButton = props => (
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
      d="M12 7.5a4.5 4.5 0 1 0 0 9.001A4.5 4.5 0 0 0 12 7.5Zm-.957 2.19a2.5 2.5 0 1 1 1.914 4.62 2.5 2.5 0 0 1-1.914-4.62Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM6.343 6.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 6.343 6.343Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgRadioButton;
