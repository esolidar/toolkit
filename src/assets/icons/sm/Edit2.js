import * as React from 'react';

const SvgEdit2 = props => (
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
      fillRule="evenodd"
      d="M10.664 2.548 3.376 9.85l-.642 2.915 2.922-.64 7.295-7.298a.239.239 0 0 0-.033-.324.698.698 0 0 1-.034-.033l-1.86-1.855a.767.767 0 0 1-.033-.034.243.243 0 0 0-.327-.034ZM9.67 1.424a1.744 1.744 0 0 1 2.428.145l1.832 1.826a1.74 1.74 0 0 1 .107 2.47l-7.474 7.477a.75.75 0 0 1-.37.202l-4.281.939a.75.75 0 0 1-.893-.894l.94-4.274a.75.75 0 0 1 .201-.368l7.47-7.485a.747.747 0 0 1 .04-.038Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEdit2;
