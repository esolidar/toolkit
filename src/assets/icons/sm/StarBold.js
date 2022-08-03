import * as React from 'react';

const SvgStarBold = props => (
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
      d="M6.923 1.588a1.274 1.274 0 0 1 2.148 0l2.092 3.3 2.729.338a1.263 1.263 0 0 1 1.024.79 1.244 1.244 0 0 1-.22 1.264L12.43 9.9l.73 3.602a1.243 1.243 0 0 1-.494 1.255 1.277 1.277 0 0 1-1.36.084l-3.31-1.813-3.305 1.815a1.278 1.278 0 0 1-1.797-.64 1.243 1.243 0 0 1-.063-.701L3.56 9.9 1.304 7.287a1.244 1.244 0 0 1 .183-1.801c.18-.14.395-.227.622-.254l2.722-.344 2.092-3.3Z"
    />
  </svg>
);

export default SvgStarBold;
