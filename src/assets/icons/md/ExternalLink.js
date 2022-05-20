import * as React from 'react';

const SvgExternalLink = props => (
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
      d="M20.293 13.293A1 1 0 0 1 22 14v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h5a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 1 .293-.707Z"
    />
    <path
      fill="#6C7679"
      d="M21.38 2.08a1 1 0 0 1 .54.54c.051.12.078.25.08.38v5a1 1 0 0 1-2 0V5.41l-7.29 7.3a1.002 1.002 0 0 1-1.639-.325 1 1 0 0 1 .219-1.095L18.59 4H16a1 1 0 1 1 0-2h5a1 1 0 0 1 .38.08Z"
    />
  </svg>
);

export default SvgExternalLink;
