import * as React from 'react';

const SvgThumbsDownBold = props => (
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
      d="M2 2h15.655A2.222 2.222 0 0 1 19.8 3.638l2.122 7.555A2.223 2.223 0 0 1 19.777 14H13v6.667a1.112 1.112 0 0 1-1.927.753L4 14H2"
    />
  </svg>
);

export default SvgThumbsDownBold;
