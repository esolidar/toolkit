import * as React from 'react';

const SvgEyeOff = props => (
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
      d="M21.207 4.207a1 1 0 0 0-1.414-1.414l-17 17a1 1 0 1 0 1.414 1.414l17-17zm-8.212 2.195a1 1 0 0 1-.896 1.093 11.97 11.97 0 0 0-8.005 4.233.34.34 0 0 0 0 .468l.007.008a18.62 18.62 0 0 0 1.55 1.488 1 1 0 0 1-1.301 1.52 20.627 20.627 0 0 1-1.712-1.644 2.34 2.34 0 0 1-.018-3.192 13.97 13.97 0 0 1 9.281-4.871 1 1 0 0 1 1.094.897zm5.239 2.441a1 1 0 0 1 1.409-.123 18.93 18.93 0 0 1 1.72 1.637 2.34 2.34 0 0 1 0 3.21c-.764.824-2.022 2.041-3.609 3.058C16.17 17.64 14.188 18.5 12 18.5a1 1 0 1 1 0-2c1.668 0 3.272-.66 4.675-1.559 1.397-.895 2.527-1.984 3.223-2.737l.008-.008a.34.34 0 0 0 0-.468l-.008-.008a16.923 16.923 0 0 0-1.54-1.468 1 1 0 0 1-.124-1.409z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEyeOff;
