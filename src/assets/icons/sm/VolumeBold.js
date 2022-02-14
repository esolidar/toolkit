import * as React from 'react';

const SvgVolumeBold = props => (
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
      d="M5 4.501H3c-.53 0-1.04.217-1.414.602A2.08 2.08 0 0 0 1 6.554v2.893c0 .545.21 1.067.586 1.452.375.385.883.601 1.414.601h2V4.501zm1.5 7.419 5.716 2.871a1.878 1.878 0 0 0 1.872-.087 1.95 1.95 0 0 0 .668-.72c.158-.294.241-.626.24-.962l.002-10.05c0-.336-.084-.667-.243-.96a1.95 1.95 0 0 0-.668-.718 1.885 1.885 0 0 0-1.869-.085L6.5 4.082v7.837z"
    />
  </svg>
);

export default SvgVolumeBold;
