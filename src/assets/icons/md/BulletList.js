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
      d="M2.44 7.06a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12ZM9 5a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9Zm0 6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H9Zm-1 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-6-6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm.44 7.06a1.5 1.5 0 1 1 2.121-2.12 1.5 1.5 0 0 1-2.122 2.12Z"
    />
  </svg>
);

export default SvgBulletList;
