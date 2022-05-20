import * as React from 'react';

const SvgImage = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      fill="#6C7679"
      d="M4.384 5A.384.384 0 0 0 4 5.384V15.77a1 1 0 1 1-2 0V5.384A2.384 2.384 0 0 1 4.384 3h12.462a1 1 0 1 1 0 2H4.384Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M6 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8Zm2 10.502 4.217-4.702a2.358 2.358 0 0 1 3.532-.003L20 18.477V9H8v9.502Zm9.773.498-3.51-3.864-.01-.012a.358.358 0 0 0-.538 0l-.006.008L10.239 19h7.534Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgImage;
