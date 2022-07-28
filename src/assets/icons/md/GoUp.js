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
      d="M6.293 9.293a1 1 0 0 0 1.414 1.414L11 7.414V19a1 1 0 1 0 2 0V7.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5Z"
    />
  </svg>
);

export default SvgGoUp;
