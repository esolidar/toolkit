import * as React from 'react';

const SvgCheckSquare = props => (
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
      d="M4.26 5.26A.889.889 0 0 1 4.89 5h10.389a1 1 0 1 0 0-2H4.888A2.889 2.889 0 0 0 2 5.889V19.11A2.889 2.889 0 0 0 4.889 22H18.11A2.89 2.89 0 0 0 21 19.111V12.5a1 1 0 1 0-2 0v6.611a.89.89 0 0 1-.889.889H4.89a.89.89 0 0 1-.89-.889V5.89c0-.236.094-.462.26-.629z"
    />
    <path
      fill={props.color}
      d="m12.707 14.707 9-9a1 1 0 0 0-1.414-1.414L12 12.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0z"
    />
  </svg>
);

export default SvgCheckSquare;
