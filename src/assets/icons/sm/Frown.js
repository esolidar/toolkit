import * as React from 'react';

const SvgFrown = props => (
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
      d="M8 8.5c-.78 0-1.54.233-2.193.668a4.183 4.183 0 0 0-1.492 1.776.75.75 0 1 0 1.37.612c.211-.472.544-.866.954-1.14A2.45 2.45 0 0 1 8 10c.479 0 .95.143 1.36.416.411.274.744.668.956 1.14a.75.75 0 1 0 1.368-.612 4.182 4.182 0 0 0-1.491-1.776A3.95 3.95 0 0 0 8 8.5ZM5 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4.293.707a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM4.11 4.11a5.5 5.5 0 1 1 7.78 7.78 5.5 5.5 0 0 1-7.78-7.78Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFrown;
