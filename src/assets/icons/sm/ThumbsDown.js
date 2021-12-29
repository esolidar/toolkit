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
      d="M1 1.75A.75.75 0 0 1 1.75 1h9.784a2.14 2.14 0 0 1 2.063 1.573l1.328 4.715A2.138 2.138 0 0 1 12.86 9.99H9.518v3.566a1.447 1.447 0 0 1-1.767 1.407 1.445 1.445 0 0 1-.737-.426L2.81 9.99H1.75a.75.75 0 0 1 0-1.5h1.389a.75.75 0 0 1 .55.24l4.33 4.684V9.24a.75.75 0 0 1 .75-.75h4.092a.64.64 0 0 0 .617-.805l-1.327-4.714a.639.639 0 0 0-.616-.471H1.75A.75.75 0 0 1 1 1.75z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgThumbsDown;
