import * as React from 'react';

const SvgArrowRight = props => (
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
      d="M3.005 13.002h15.59l-3.3 3.29a1.004 1.004 0 0 0 1.42 1.42l5-5a.999.999 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-5-5a.999.999 0 0 0-1.42 0 1 1 0 0 0 0 1.42l3.3 3.29H3.005a1 1 0 0 0 0 2z"
    />
  </svg>
);

export default SvgArrowRight;
