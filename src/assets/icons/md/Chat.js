import * as React from 'react';

const SvgChat = props => (
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
      d="M11 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M6.837 3.436A10 10 0 0 1 12 2a10.003 10.003 0 0 1 9.828 8.194A10 10 0 0 1 7.085 20.713l-3.764 1.27a1 1 0 0 1-1.25-1.316l1.38-3.478A10 10 0 0 1 6.838 3.436zM12 4a8 8 0 0 0-6.604 12.516 1 1 0 0 1 .104.933l-.773 1.949 2.154-.727a1 1 0 0 1 .852.1A8 8 0 1 0 12 4z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChat;