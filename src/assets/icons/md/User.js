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
      fill="#6C7679"
      fillRule="evenodd"
      d="M12 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm-1.34 2.266a3.5 3.5 0 1 1 2.68 6.468 3.5 3.5 0 0 1-2.68-6.468Z"
      clipRule="evenodd"
    />
    <path
      fill="#6C7679"
      d="M12 13.992a10 10 0 0 0-9.431 6.675 1 1 0 0 0 1.886.665 8 8 0 0 1 15.09 0 1 1 0 0 0 1.886-.665A10 10 0 0 0 12 13.992Z"
    />
  </svg>
);

export default SvgUser;
