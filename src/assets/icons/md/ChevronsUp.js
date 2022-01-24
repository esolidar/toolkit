import * as React from 'react';

const SvgChevronsUp = props => (
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
      d="M11.319 3.136a1.778 1.778 0 0 1 1.94.386l.016.017 6.45 6.771a1 1 0 0 1-1.45 1.38L12 5.1l-6.276 6.59a1 1 0 0 1-1.448-1.38l6.45-6.771.015-.017c.166-.165.362-.297.578-.386z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="m12 14.1 6.276 6.59a1 1 0 0 0 1.448-1.38l-6.45-6.771-.015-.017a1.776 1.776 0 0 0-2.518 0l-.016.017-6.45 6.771a1 1 0 0 0 1.45 1.38L12 14.1z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronsUp;
