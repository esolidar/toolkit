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
      d="M10.615 3.754a1.639 1.639 0 0 1 2.762 0l2.69 4.244 3.508.434a1.623 1.623 0 0 1 1.317 1.016 1.598 1.598 0 0 1-.283 1.625l-2.913 3.368.938 4.632A1.6 1.6 0 0 1 18 20.686a1.642 1.642 0 0 1-1.75.108l-4.254-2.331-4.25 2.333a1.642 1.642 0 0 1-2.311-.822 1.599 1.599 0 0 1-.081-.901l.938-4.632-2.901-3.36a1.6 1.6 0 0 1 .236-2.315c.231-.179.507-.291.798-.326l3.5-.442 2.69-4.244Z"
    />
  </svg>
);

export default SvgStarBold;
