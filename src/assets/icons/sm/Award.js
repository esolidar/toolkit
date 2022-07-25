import * as React from 'react';

const SvgAward = props => (
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
      d="M8 4a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 0 0 8 4Zm-.53 1.72a.75.75 0 1 1 1.06 1.06.75.75 0 0 1-1.06-1.06Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8 1a5.25 5.25 0 0 0-4.335 8.212l-2.572 4.677a.75.75 0 0 0 .82 1.093l4.5-1a.75.75 0 0 0 .572-.585l.387-1.935a5.26 5.26 0 0 0 1.256 0l.387 1.935a.75.75 0 0 0 .572.585l4.5 1a.75.75 0 0 0 .834-1.067l-2.454-4.907A5.25 5.25 0 0 0 8 1Zm3.408 9.243a5.25 5.25 0 0 1-1.329.828l.31 1.553 2.486.552-1.467-2.933Zm-8.201 2.915 1.535-2.791c.362.286.759.523 1.179.704l-.31 1.553-2.404.534Zm2.141-9.56a3.75 3.75 0 1 1 5.304 5.304 3.75 3.75 0 0 1-5.304-5.304Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAward;
