import * as React from 'react';

const SvgChevronLeft = props => (
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
      d="M11.543 1.483a.75.75 0 0 1-.026 1.06L5.787 8l5.73 5.457a.75.75 0 0 1-1.034 1.086L4.679 9.015l-.012-.012a1.416 1.416 0 0 1 0-2.006l.012-.012 5.804-5.528a.75.75 0 0 1 1.06.026Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronLeft;
