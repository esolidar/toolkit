import * as React from 'react';

const SvgArrowUpRight = props => (
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
      d="M13.025 3.75a.775.775 0 0 0-.775-.775h-5a.775.775 0 1 0 0 1.55h3.129l-7.677 7.677a.775.775 0 1 0 1.096 1.096l7.677-7.677V8.75a.775.775 0 0 0 1.55 0v-5Z"
    />
  </svg>
);

export default SvgArrowUpRight;
