import * as React from 'react';

const SvgThumbsUpBold = props => (
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
      d="M2 22h15.655a2.222 2.222 0 0 0 2.145-1.638l2.122-7.555A2.224 2.224 0 0 0 19.777 10H13V3.333a1.112 1.112 0 0 0-1.927-.753L4 10H2"
    />
  </svg>
);

export default SvgThumbsUpBold;
