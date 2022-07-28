import * as React from 'react';

const SvgCornerRightUp = props => (
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
      d="M2 14.25c0 .414.336.75.75.75H4.5c1.183 0 2.343-.282 3.28-1.22.475-.475.837-1.127 1.079-1.776.244-.653.391-1.368.391-2.004V3.476l2.488 2.322a.75.75 0 1 0 1.024-1.096l-3.75-3.5a.75.75 0 0 0-1.024 0l-3.75 3.5a.75.75 0 1 0 1.024 1.096L7.75 3.476V10c0 .425-.103.96-.296 1.48-.196.522-.46.965-.734 1.24-.563.563-1.28.78-2.22.78H2.75a.75.75 0 0 0-.75.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerRightUp;
