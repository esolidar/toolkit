import * as React from 'react';

const SvgArrowLeftCircle = props => (
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
      d="M18 12a1 1 0 0 1-1 1H9.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-2.999A1.008 1.008 0 0 1 6 12.003v-.006a1 1 0 0 1 .294-.704l2.999-3a1 1 0 1 1 1.414 1.414L9.414 11H17a1 1 0 0 1 1 1Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0Zm-4.343-5.657A8 8 0 1 1 6.343 17.657 8 8 0 0 1 17.657 6.343Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowLeftCircle;
