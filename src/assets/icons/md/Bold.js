import * as React from 'react';

const SvgBold = props => (
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
      d="M17.24 11.76a6.292 6.292 0 0 0-1.12-.88c.14-.11.29-.22.42-.34A5 5 0 0 0 13 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a6 6 0 0 0 4.24-10.24ZM7 5a1 1 0 0 1 1-1h5a3 3 0 0 1 0 6H7V5Zm8.83 13.83A4.002 4.002 0 0 1 13 20H8a1 1 0 0 1-1-1v-7h6a4 4 0 0 1 2.83 6.83Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBold;
