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
      fill="#6C7679"
      d="M1 15h10.959a1.555 1.555 0 0 0 1.5-1.146l1.486-5.885a1.556 1.556 0 0 0-1.5-1.965H9V1.777a.778.778 0 0 0-1.349-.527L2.556 6.004H1"
    />
  </svg>
);

export default SvgThumbsUpBold;
