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
      fill="#6C7679"
      d="M2.019 2.558a1 1 0 1 1 1.962.384 1 1 0 0 1-1.962-.384ZM14 3.5H6A.75.75 0 0 1 6 2h8a.75.75 0 1 1 0 1.5ZM6 7h8a.75.75 0 1 1 0 1.5H6A.75.75 0 0 1 6 7Zm8 5H6a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5ZM2.29 7.046a1 1 0 1 0 1.42 1.408 1 1 0 0 0-1.42-1.408Zm-.271 5.512a1 1 0 1 1 1.963.384 1 1 0 0 1-1.963-.384Z"
    />
  </svg>
);

export default SvgBulletList;
