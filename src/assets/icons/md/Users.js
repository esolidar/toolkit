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
      d="M9 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM7.232 4.732a2.5 2.5 0 1 1 3.536 3.536 2.5 2.5 0 0 1-3.536-3.536z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M9 12a7 7 0 0 0-7 7v2a1 1 0 1 0 2 0v-2a5 5 0 1 1 10 0v2a1 1 0 1 0 2 0v-2a7 7 0 0 0-7-7zm7.405-8.859a1 1 0 0 1 1.406-.156 4.503 4.503 0 0 1-.579 7.423 1 1 0 1 1-.992-1.736 2.5 2.5 0 0 0 .321-4.125 1 1 0 0 1-.156-1.406zm2.198 9.855a1 1 0 1 0-1.03 1.715A5 5 0 0 1 20 19v2a1 1 0 0 0 2 0v-2a7 7 0 0 0-3.397-6.004z"
    />
  </svg>
);

export default SvgUsers;
