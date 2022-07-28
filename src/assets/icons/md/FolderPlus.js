import * as React from 'react';

const SvgFolderPlus = props => (
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
      d="M8 14a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 0 1-1-1Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8.558 2a3 3 0 0 1 2.847 2.052L11.72 5H19a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h3.558Zm.585 2.189A1 1 0 0 0 8.558 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-8a1 1 0 0 1-.949-.684l-.544-1.632a1 1 0 0 0-.364-.495Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFolderPlus;
