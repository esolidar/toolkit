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
      d="M13.333 3.882a5.286 5.286 0 0 1-1.522.742A2.172 2.172 0 0 0 8 6.078v.485a5.168 5.168 0 0 1-4.364-2.196S1.696 8.73 6.061 10.67a5.643 5.643 0 0 1-3.394.97c4.363 2.424 9.697 0 9.697-5.576 0-.135-.014-.27-.04-.403a3.744 3.744 0 0 0 1.01-1.779Z"
    />
  </svg>
);

export default SvgTwitter;
