import * as React from 'react';

const SvgGoUp = props => (
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
      d="M8.141 3.017a.75.75 0 0 0-.671.206L3.136 7.556a.75.75 0 0 0 1.06 1.061L7.25 5.564v7.19a.75.75 0 0 0 1.5 0v-7.19l3.053 3.053a.75.75 0 0 0 1.06-1.06L8.53 3.222a.75.75 0 0 0-.389-.206Z"
    />
  </svg>
);

export default SvgGoUp;
