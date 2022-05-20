import * as React from 'react';

const SvgMaximize2 = props => (
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
      d="M14.25 1h-4.167a.75.75 0 1 0 0 1.5h2.356L9.553 5.386a.75.75 0 1 0 1.06 1.061L13.5 3.561v2.356a.75.75 0 0 0 1.5 0V1.75a.747.747 0 0 0-.75-.75ZM1 10.083a.75.75 0 1 1 1.5 0v2.356l2.886-2.886a.75.75 0 1 1 1.061 1.06L3.561 13.5h2.356a.75.75 0 0 1 0 1.5H1.75a.747.747 0 0 1-.75-.75v-4.167Z"
    />
  </svg>
);

export default SvgMaximize2;
