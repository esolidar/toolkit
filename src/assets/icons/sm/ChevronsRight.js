import * as React from 'react';

const SvgChevronsRight = props => (
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
      d="M8.642 7.457a1.416 1.416 0 0 1-.309 1.546l-.012.012-5.804 5.528a.75.75 0 1 1-1.034-1.086L7.213 8l-5.73-5.457a.75.75 0 1 1 1.034-1.086l5.804 5.528.012.012c.132.131.237.288.309.46Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M14.642 7.457a1.416 1.416 0 0 1-.308 1.546l-.013.012-5.804 5.528a.75.75 0 1 1-1.034-1.086L13.213 8l-5.73-5.457a.75.75 0 1 1 1.034-1.086l5.804 5.528.013.012c.132.131.236.288.308.46Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronsRight;
