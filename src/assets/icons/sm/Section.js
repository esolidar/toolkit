import * as React from 'react';

const SvgSection = props => (
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
      d="M3.528 2.5c-.13 0-.26.053-.362.16A.613.613 0 0 0 3 3.082v1.334a.75.75 0 0 1-1.5 0V3.083c0-.542.206-1.068.583-1.461A2.001 2.001 0 0 1 3.528 1h8.944a2 2 0 0 1 1.445.622c.377.393.583.919.583 1.461v1.334a.75.75 0 0 1-1.5 0V3.083a.614.614 0 0 0-.166-.424.502.502 0 0 0-.362-.159H8.75V13h1.917a.75.75 0 0 1 0 1.5H5.333a.75.75 0 0 1 0-1.5H7.25V2.5H3.528Z"
    />
  </svg>
);

export default SvgSection;
