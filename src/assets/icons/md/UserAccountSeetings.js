import * as React from 'react';

const SvgUserAccountSeetings = props => (
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
      d="M5.818 3.318a4.5 4.5 0 1 1 6.364 6.364 4.5 4.5 0 0 1-6.364-6.364zM9 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm8.469 5.78a1 1 0 0 1 1.414 0l2.824 2.823a1 1 0 0 1 0 1.414l-7.238 7.24a1 1 0 0 1-.57.284l-3.275.45a1 1 0 0 1-1.127-1.127l.45-3.274a1 1 0 0 1 .284-.571l7.238-7.238zm.707 2.122-6.293 6.293-.225 1.635 1.635-.225 6.293-6.295-1.41-1.408z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M11.214 12.357A7 7 0 0 0 2 19v2a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2H4v-1a5 5 0 0 1 6.582-4.745 1 1 0 1 0 .632-1.898z"
    />
  </svg>
);

export default SvgUserAccountSeetings;
