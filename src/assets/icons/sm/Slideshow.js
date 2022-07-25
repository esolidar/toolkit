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
      d="M1.75 1a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h4.674l-2.256 2.777a.75.75 0 1 0 1.164.946L8 11.439l2.668 3.284a.75.75 0 0 0 1.164-.946L9.576 11h4.674a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-.75-.75H1.75ZM13.5 9.5v-7h-11v7h11Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSlideshow;
