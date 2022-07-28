import * as React from 'react';

const SvgFacebook = props => (
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
      d="m10.728 8.667.3-1.93H9.155V5.483c0-.529.261-1.043 1.1-1.043h.85V2.797s-.772-.13-1.51-.13c-1.542 0-2.55.924-2.55 2.598v1.471H5.334v1.93h1.714v4.667h2.109V8.667h1.572Z"
    />
  </svg>
);

export default SvgFacebook;
