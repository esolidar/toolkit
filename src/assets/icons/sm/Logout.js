import * as React from 'react';

const SvgLogout = props => (
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
      d="M2.5 2.5v11h6v-2.75a.75.75 0 0 1 1.5 0v2.806c0 .378-.148.744-.415 1.016A1.425 1.425 0 0 1 8.568 15H2.432c-.384 0-.75-.156-1.017-.428A1.451 1.451 0 0 1 1 13.556V2.444c0-.378.148-.744.415-1.016A1.426 1.426 0 0 1 2.432 1h6.136c.384 0 .75.156 1.017.428.267.272.415.638.415 1.016V5.25a.75.75 0 0 1-1.5 0V2.5h-6Z"
    />
    <path
      fill="#6C7679"
      d="M5 7.75A.75.75 0 0 1 5.75 7h6.606l-.72-.72a.75.75 0 1 1 1.061-1.06l2.083 2.083a.75.75 0 0 1 0 1.06l-2.083 2.084a.75.75 0 0 1-1.06-1.06l.886-.887H5.75A.75.75 0 0 1 5 7.75Z"
    />
  </svg>
);

export default SvgLogout;
