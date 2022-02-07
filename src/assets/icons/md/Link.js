import * as React from 'react';

const SvgLink = props => (
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
      d="m12.284 16.291-3.411 3.413a.87.87 0 0 1-.32.22 1 1 0 0 1-1.11-.22L4.3 16.55a1.001 1.001 0 0 1-.22-1.1.831.831 0 0 1 .22-.33l3.401-3.414a1.005 1.005 0 0 0-1.42-1.42L2.88 13.698a3.002 3.002 0 0 0-.65 1 3.003 3.003 0 0 0 0 2.313c.148.373.369.714.65 1l3.112 3.113a3 3 0 0 0 1 .65 3 3 0 0 0 1.17.23 3.06 3.06 0 0 0 1.15-.23 3 3 0 0 0 1.001-.65l3.411-3.413a1.005 1.005 0 0 0-1.42-1.421h-.02zm9.483-9.297a3.002 3.002 0 0 0-.65-1L17.996 2.88a3 3 0 0 0-1-.65 3.08 3.08 0 0 0-2.311 0 3.001 3.001 0 0 0-1 .65l-3.412 3.402a1.005 1.005 0 0 0 1.42 1.421l3.412-3.402a.831.831 0 0 1 .33-.22.94.94 0 0 1 .77 0 .98.98 0 0 1 .33.22l3.162 3.152a1 1 0 0 1 .22 1.101.831.831 0 0 1-.22.33l-3.412 3.403a1.002 1.002 0 0 0 .326 1.64 1 1 0 0 0 1.095-.219l3.411-3.403c.282-.286.503-.627.65-1a3.002 3.002 0 0 0 0-2.312z"
    />
    <path
      fill={props.color}
      d="M14.285 8.285 8.282 14.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l6.003-6.004a1.005 1.005 0 0 0-1.42-1.421z"
    />
  </svg>
);

export default SvgLink;
