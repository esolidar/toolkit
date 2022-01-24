import * as React from 'react';

const SvgArrowDownCircle = props => (
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
      d="M12 6a1 1 0 0 1 1 1v7.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2.999 3a1.01 1.01 0 0 1-.705.293h-.006a1 1 0 0 1-.704-.294l-3-2.999a1 1 0 1 1 1.414-1.414L11 14.586V7a1 1 0 0 1 1-1z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM6.342 6.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 6.343 6.343z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowDownCircle;
