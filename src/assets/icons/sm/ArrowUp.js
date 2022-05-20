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
      d="M4.136 4.803a.75.75 0 0 0 1.06 1.06L7.25 3.812V14a.75.75 0 0 0 1.5 0V3.81l2.053 2.053a.75.75 0 0 0 1.06-1.061L8.53 1.47a.75.75 0 0 0-1.06 0L4.136 4.803Z"
    />
  </svg>
);

export default SvgArrowUp;
