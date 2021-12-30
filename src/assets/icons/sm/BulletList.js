import * as React from 'react';

const SvgBulletList = props => (
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
      d="M2.019 2.558a1 1 0 1 1 1.962.384 1 1 0 0 1-1.962-.384zM14 3.5H6A.75.75 0 0 1 6 2h8a.75.75 0 1 1 0 1.5zM6 7h8a.75.75 0 1 1 0 1.5H6A.75.75 0 0 1 6 7zm8 5H6a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5zM2.29 7.046a1 1 0 1 0 1.42 1.408 1 1 0 0 0-1.42-1.408zm-.271 5.512a1 1 0 1 1 1.963.384 1 1 0 0 1-1.963-.384z"
    />
  </svg>
);

export default SvgBulletList;
