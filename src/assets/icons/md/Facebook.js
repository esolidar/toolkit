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
      d="m16.092 13 .45-2.896h-2.809V8.225c0-.792.393-1.564 1.65-1.564h1.277V4.196S15.5 4 14.394 4c-2.312 0-3.824 1.387-3.824 3.897v2.207H8V13h2.57v7h3.163v-7h2.36Z"
    />
  </svg>
);

export default SvgFacebook;
