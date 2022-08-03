import * as React from 'react';

const SvgLinkedin = props => (
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
      d="M5.408 13.713h-2.23V6.56h2.23v7.153ZM4.292 5.585A1.3 1.3 0 0 1 3 4.286c0-.34.136-.668.378-.91a1.295 1.295 0 0 1 2.206.91 1.3 1.3 0 0 1-1.292 1.299Zm9.465 8.128h-2.226V10.23c0-.83-.017-1.894-1.16-1.894-1.16 0-1.337.902-1.337 1.834v3.542H6.806V6.56h2.14v.976h.03c.298-.562 1.026-1.155 2.11-1.155 2.258 0 2.673 1.48 2.673 3.403v3.929h-.002Z"
    />
  </svg>
);

export default SvgLinkedin;
