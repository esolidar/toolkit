import * as React from 'react';

const SvgCornerUpLeft = props => (
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
      d="M14 14a.75.75 0 0 0 .75-.75V11.5c0-1.264-.582-2.638-1.47-3.525-.935-.936-2.094-1.225-3.28-1.225H3.476l2.322-2.488a.75.75 0 1 0-1.096-1.024l-3.5 3.75a.75.75 0 0 0 0 1.024l3.5 3.75a.75.75 0 1 0 1.096-1.024L3.476 8.25H10c.936 0 1.655.22 2.22.785.612.613 1.03 1.607 1.03 2.465v1.75c0 .414.336.75.75.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerUpLeft;
