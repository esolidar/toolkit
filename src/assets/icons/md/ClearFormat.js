import * as React from 'react';

const SvgClearFormat = props => (
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
      d="M13.021 2H19a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-5.198l-.6 2.7a1 1 0 0 1-1.952-.433L11.753 4H10a1 1 0 0 1 0-2h3.021zM10.14 15.878a1 1 0 0 1 .758 1.193L10.247 20H13a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h3.198l.748-3.363a1 1 0 0 1 1.193-.76zM3.707 2.293a1 1 0 0 0-1.414 1.414l18 18a1 1 0 0 0 1.414-1.414l-18-18z"
    />
  </svg>
);

export default SvgClearFormat;
