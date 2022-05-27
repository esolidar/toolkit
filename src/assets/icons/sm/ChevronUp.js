import * as React from 'react';

const SvgChevronUp = props => (
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
      fillRule="evenodd"
      d="M7.457 5.358a1.416 1.416 0 0 1 1.546.309l.012.012 5.528 5.804a.75.75 0 0 1-1.086 1.034L8 6.787l-5.457 5.73a.75.75 0 0 1-1.086-1.034l5.528-5.804.012-.012c.131-.132.288-.237.46-.309Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronUp;
