import * as React from 'react';

const SvgTrash = props => (
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
      d="M9.5 2a2 2 0 0 0-2 2v2h-4a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2h-4V4a2 2 0 0 0-2-2h-5zm5 4V4h-5v2h5z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M5.304 10.02a1 1 0 0 1 1.177.784L8.32 20h7.36l1.84-9.196a1 1 0 0 1 1.96.392l-2 10a1 1 0 0 1-.98.804h-9a1 1 0 0 1-.98-.804l-2-10a1 1 0 0 1 .784-1.177z"
    />
  </svg>
);

export default SvgTrash;
