import * as React from 'react';

const SvgTwitter = props => (
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
      d="M20 5.823a7.928 7.928 0 0 1-2.284 1.113A3.259 3.259 0 0 0 12 9.117v.728A7.753 7.753 0 0 1 5.455 6.55s-2.91 6.546 3.636 9.455A8.466 8.466 0 0 1 4 17.459c6.546 3.637 14.546 0 14.546-8.363a3.22 3.22 0 0 0-.059-.604A5.615 5.615 0 0 0 20 5.822Z"
    />
  </svg>
);

export default SvgTwitter;
