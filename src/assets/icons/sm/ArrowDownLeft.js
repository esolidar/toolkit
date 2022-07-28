import * as React from 'react';

const SvgArrowDownLeft = props => (
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
      d="M5.121 11.975H8.25a.775.775 0 0 1 0 1.55h-5a.775.775 0 0 1-.775-.775v-5a.775.775 0 0 1 1.55 0v3.129l7.677-7.677a.775.775 0 1 1 1.096 1.096l-7.677 7.677Z"
    />
  </svg>
);

export default SvgArrowDownLeft;
