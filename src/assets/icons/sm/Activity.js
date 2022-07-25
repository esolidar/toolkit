import * as React from 'react';

const SvgActivity = props => (
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
      d="M1.75 11a.75.75 0 0 1 .75.75v1.17c0 .31.269.58.583.58h9.837c.31 0 .58-.27.58-.58v-1.17a.75.75 0 0 1 1.5 0v1.17c0 1.138-.94 2.08-2.08 2.08H3.083A2.094 2.094 0 0 1 1 12.92v-1.17a.75.75 0 0 1 .75-.75Zm1.333-8.5a.597.597 0 0 0-.583.583V4.25a.75.75 0 0 1-1.5 0V3.083C1 1.943 1.943 1 3.083 1h9.837C14.063 1 15 1.945 15 3.083V4.25a.75.75 0 0 1-1.5 0V3.083a.594.594 0 0 0-.58-.583H3.083Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M6.333 4.005a.75.75 0 0 1 .617.476l1.933 5.025 1.216-2.128A.75.75 0 0 1 10.75 7h3.5a.75.75 0 0 1 0 1.5h-3.065l-1.784 3.122a.75.75 0 0 1-1.351-.103L6.07 6.372 4.874 8.166a.75.75 0 0 1-.624.334h-2.5a.75.75 0 0 1 0-1.5h2.099l1.777-2.666a.75.75 0 0 1 .707-.33Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgActivity;
