import * as React from 'react';

const SvgPublic = props => (
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
      d="M4.929 4.929A10 10 0 0 1 11.999 2S12 2 12 2a10 10 0 1 1-7.07 2.929Zm4.95-.643A8 8 0 0 0 4.063 11h3.553a16.543 16.543 0 0 1 2.263-6.714ZM7.616 13H4.063a8 8 0 0 0 5.816 6.714A16.542 16.542 0 0 1 7.616 13Zm6.505 6.714A8 8 0 0 0 19.937 13h-3.553a16.542 16.542 0 0 1-2.263 6.714ZM14.37 13A14.543 14.543 0 0 1 12 19.322 14.542 14.542 0 0 1 9.63 13h4.74Zm0-2H9.63A14.542 14.542 0 0 1 12 4.678 14.543 14.543 0 0 1 14.37 11Zm2.013 0a16.542 16.542 0 0 0-2.263-6.714A8 8 0 0 1 19.937 11h-3.553Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPublic;
