import * as React from 'react';

const SvgArrowUpCircle = props => (
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
      d="M12 18a1 1 0 0 1-1-1V9.414l-1.293 1.293a1 1 0 1 1-1.414-1.414l2.999-3A1.01 1.01 0 0 1 11.997 6h.006a1 1 0 0 1 .704.294l3 2.999a1 1 0 0 1-1.414 1.414L13 9.414V17a1 1 0 0 1-1 1Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M12 22a10 10 0 1 0 0-19.999A10 10 0 0 0 12 22Zm5.657-4.343A8 8 0 1 1 6.343 6.343a8 8 0 0 1 11.314 11.314Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowUpCircle;
