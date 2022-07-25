import * as React from 'react';

const SvgSlideshow = props => (
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
      fillRule="evenodd"
      d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6.92l2.7 3.375a1 1 0 1 1-1.56 1.25L12 17.6l-3.22 4.024a1 1 0 1 1-1.56-1.25L9.92 17H3a1 1 0 0 1-1-1V3Zm18 12V4H4v11h16Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSlideshow;
