import * as React from 'react';

const SvgUser = props => (
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
      d="M6.66 1.266a3.5 3.5 0 1 1 2.68 6.468 3.5 3.5 0 0 1-2.68-6.468ZM8 2.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-3.956 7.758a6.847 6.847 0 0 1 10.413 3.312.75.75 0 0 1-1.414.5 5.347 5.347 0 0 0-10.086 0 .75.75 0 1 1-1.414-.5 6.847 6.847 0 0 1 2.501-3.312Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUser;
