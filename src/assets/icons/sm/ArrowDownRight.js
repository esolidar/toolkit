import * as React from 'react';

const SvgArrowDownRight = props => (
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
      d="M10.379 11.975H7.25a.775.775 0 0 0 0 1.55h5a.775.775 0 0 0 .775-.775v-5a.775.775 0 1 0-1.55 0v3.129L3.798 3.202a.775.775 0 1 0-1.096 1.096l7.677 7.677Z"
    />
  </svg>
);

export default SvgArrowDownRight;
