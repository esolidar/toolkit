import * as React from 'react';

const SvgX = props => (
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
      d="m9.06 7.991 4.47-4.478a.752.752 0 0 0-.535-1.263.75.75 0 0 0-.524.202L8 6.929 3.53 2.452a.75.75 0 0 0-1.261.536.752.752 0 0 0 .2.525l4.47 4.478-4.47 4.478A.752.752 0 0 0 3 13.75a.75.75 0 0 0 .53-.22L8 9.053l4.47 4.477a.75.75 0 1 0 1.06-1.061L9.06 7.99Z"
    />
  </svg>
);

export default SvgX;
