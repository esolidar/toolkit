import * as React from 'react';

const SvgCalendar = props => (
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
      fillRule="evenodd"
      d="M5.278 1.75a.75.75 0 0 0-1.5 0V2H1.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75h-2.028v-.25a.75.75 0 0 0-1.5 0V2H5.278v-.25ZM13.5 6.5v-3h-1.278v.75a.75.75 0 0 1-1.5 0V3.5H5.278v.75a.75.75 0 0 1-1.5 0V3.5H2.5v3h11ZM2.5 8h11v5.5h-11V8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCalendar;
