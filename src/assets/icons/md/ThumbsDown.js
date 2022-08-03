import * as React from 'react';

const SvgThumbsDown = props => (
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
      d="M17.697 4.205A1 1 0 0 0 17.09 4H3a1 1 0 0 1 0-2h14.09a3 3 0 0 1 2.895 2.211l1.91 7A3 3 0 0 1 19 15h-5v5.001a2 2 0 0 1-3.465 1.36l-.003-.004L4.567 15H3a1 1 0 1 1 0-2h2a1 1 0 0 1 .73.316L12 19.999V14a1 1 0 0 1 1-1h6a1.001 1.001 0 0 0 .965-1.263l-1.91-7a1 1 0 0 0-.358-.532Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgThumbsDown;
