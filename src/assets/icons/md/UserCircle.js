import * as React from 'react';

const SvgUserCircle = props => (
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
      d="M10.47 6.304a4 4 0 1 1 3.06 7.391 4 4 0 0 1-3.06-7.39ZM12 8a2 2 0 1 0 0 4.001A2 2 0 0 0 12 8Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM6.343 6.343a8 8 0 1 1 11.108 11.512 6.985 6.985 0 0 0-2.07-1.911A6.567 6.567 0 0 0 12 15a6.567 6.567 0 0 0-3.382.944 6.987 6.987 0 0 0-2.07 1.911 8 8 0 0 1-.206-11.512Zm1.828 12.681a8 8 0 0 0 7.658 0 4.988 4.988 0 0 0-1.476-1.365A4.566 4.566 0 0 0 12 17c-.82 0-1.63.225-2.353.659a4.988 4.988 0 0 0-1.476 1.365Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUserCircle;
