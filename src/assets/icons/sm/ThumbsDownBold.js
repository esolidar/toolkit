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
      fill="#6C7679"
      d="M1 1h10.959a1.555 1.555 0 0 1 1.5 1.147l1.486 5.884a1.556 1.556 0 0 1-1.5 1.965H9v4.227a.778.778 0 0 1-1.349.527L2.556 9.996H1"
    />
  </svg>
);

export default SvgThumbsDownBold;
