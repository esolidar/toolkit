import * as React from 'react';

const SvgArrowUp = props => (
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
      d="M13.003 20.998V5.408l3.29 3.3a1.004 1.004 0 0 0 1.42-1.42l-5-5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.29-3.3v15.59a1 1 0 1 0 2 0Z"
    />
  </svg>
);

export default SvgArrowUp;
