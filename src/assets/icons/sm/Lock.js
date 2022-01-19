import * as React from 'react';

const SvgLock = props => (
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
      fillRule="evenodd"
      d="M6.222 3.206A2.567 2.567 0 0 1 8 2.5c.672 0 1.311.257 1.778.706.466.448.722 1.049.722 1.669V6h-5V4.875c0-.62.256-1.221.722-1.67zM4 6V4.875c0-1.037.429-2.026 1.182-2.75A4.067 4.067 0 0 1 8 1c1.052 0 2.066.401 2.818 1.125A3.815 3.815 0 0 1 12 4.875V6h1.25a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 2.75 6H4zm-.5 1.5v6h9v-6h-9zm3 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgLock;