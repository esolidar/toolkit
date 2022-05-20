import * as React from 'react';

const SvgArrowRightCircle = props => (
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
      d="M6 12a1 1 0 0 1 1-1h7.586l-1.293-1.293a1 1 0 1 1 1.414-1.414l3 2.999c.185.187.292.44.293.705v.006a1 1 0 0 1-.294.704l-2.999 3a1 1 0 0 1-1.414-1.414L14.586 13H7a1 1 0 0 1-1-1Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Zm4.343 5.657A8 8 0 1 1 17.657 6.343 8 8 0 0 1 6.343 17.657Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowRightCircle;
