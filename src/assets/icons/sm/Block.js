import * as React from 'react';

const SvgBlock = props => (
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
      d="M8 1a7 7 0 0 0-4.956 11.944l.006.006.006.006a7 7 0 0 0 9.9-9.9l-.006-.006-.006-.006A7 7 0 0 0 8 1zm3.322 2.617a5.5 5.5 0 0 0-7.705 7.706l7.706-7.706zm-6.644 8.766a5.5 5.5 0 0 0 7.705-7.705l-7.705 7.705z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBlock;
