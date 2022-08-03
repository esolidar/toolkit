import * as React from 'react';

const SvgAlertTriangle = props => (
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
      d="M8 5.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 8 5.25Zm-.707 6.457a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M6.964 1.284a2.032 2.032 0 0 1 2.816.77l4.867 8.726A2.846 2.846 0 0 1 12.152 15H3.845A2.847 2.847 0 0 1 1 12.2a2.843 2.843 0 0 1 .353-1.416l.001-.003L6.22 2.053a2.03 2.03 0 0 1 .745-.77ZM3.845 13.5h8.307a1.349 1.349 0 0 0 1.182-1.995v-.001L8.465 2.776a.53.53 0 0 0-.932 0l-.003.005-4.864 8.727-.001.001a1.343 1.343 0 0 0 1.18 1.991Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAlertTriangle;
