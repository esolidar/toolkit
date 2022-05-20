import * as React from 'react';

const SvgFolderMinus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill="#6C7679" d="M9 13a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M10.313 2.566A3 3 0 0 0 8.558 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7.28l-.315-.948a3 3 0 0 0-1.092-1.486ZM8.558 4a1 1 0 0 1 .95.684l.543 1.632A1 1 0 0 0 11 7h8a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3.558Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFolderMinus;
