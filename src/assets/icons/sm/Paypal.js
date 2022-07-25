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
      d="M6.243 1.047a.75.75 0 0 0-.965.44l-3.23 8.662a.75.75 0 0 0 1.405.524l1.173-3.147 2.666.995a3.318 3.318 0 1 0 2.319-6.218L6.243 1.047ZM8.517 7.23a1.818 1.818 0 0 1-.7-.114L5.15 6.121l1.27-3.406 2.666.994a1.82 1.82 0 0 1 .12 3.357c-.217.1-.452.155-.69.163Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M13.746 8.67a.75.75 0 0 0-1.491.16 1.819 1.819 0 0 1-2.44 1.897L6.448 9.47a.75.75 0 0 0-.965.44l-1.436 3.85a.75.75 0 0 0 1.406.525l1.174-3.147 2.666.994a3.318 3.318 0 0 0 4.454-3.463Z"
    />
  </svg>
);

export default SvgPaypal;
