import * as React from 'react';

const SvgCornerDownRight = props => (
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
      d="M2 3a.75.75 0 0 0-.75.75V5.5c0 1.264.582 2.638 1.47 3.525.935.936 2.094 1.225 3.28 1.225h6.524l-2.322 2.488a.75.75 0 1 0 1.096 1.024l3.5-3.75a.75.75 0 0 0 0-1.024l-3.5-3.75a.75.75 0 1 0-1.096 1.024l2.322 2.488H6c-.936 0-1.655-.22-2.22-.785-.612-.613-1.03-1.607-1.03-2.465V3.75A.75.75 0 0 0 2 3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerDownRight;
