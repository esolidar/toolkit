import * as React from 'react';

const SvgPaypal = props => (
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
      d="M9.966 2.063a1 1 0 0 0-1.287.588L3.833 15.642a1 1 0 0 0 1.874.7l1.804-4.838 4.115 1.535a4.852 4.852 0 1 0 3.392-9.092L9.966 2.063Zm3.458 9.28a2.853 2.853 0 0 1-1.098-.178L8.21 9.63l1.994-5.344 4.115 1.535a2.854 2.854 0 0 1 .188 5.267c-.34.155-.708.242-1.083.256Zm-3.858 5.17 4.116 1.534a4.852 4.852 0 0 0 6.512-5.063 1 1 0 0 0-1.988.212 2.852 2.852 0 0 1-3.828 2.976l-5.05-1.883a1 1 0 0 0-1.287.588l-.002.004-2.152 5.77a1 1 0 1 0 1.874.699l1.805-4.838Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPaypal;
