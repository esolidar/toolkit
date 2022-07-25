import * as React from 'react';

const SvgEdit3 = props => (
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
      d="M1 13.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474L8.28 11.28a.75.75 0 0 1-.407.21l-3 .5a.75.75 0 0 1-.863-.863l.5-3a.75.75 0 0 1 .21-.407l6.293-6.293Zm1.414 1.06a.25.25 0 0 0-.354 0L5.95 8.61l-.288 1.728 1.728-.288 6.123-6.123a.25.25 0 0 0 0-.354l-1.086-1.086Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEdit3;
