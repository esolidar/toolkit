import * as React from 'react';

const SvgArrowUpLeft = props => (
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
      d="M2.475 3.75c0-.428.347-.775.775-.775h5a.775.775 0 1 1 0 1.55H5.121l7.677 7.677a.775.775 0 0 1-1.096 1.096L4.025 5.621V8.75a.775.775 0 0 1-1.55 0v-5Z"
    />
  </svg>
);

export default SvgArrowUpLeft;
