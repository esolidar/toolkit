import * as React from 'react';

const SvgCheck = props => (
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
      d="M21.628 4.221a1 1 0 0 1 .15 1.407L10.269 19.91l-.002.003a2.943 2.943 0 0 1-4.545.027l-.007-.01-3.49-4.3a1 1 0 0 1 1.552-1.26l3.486 4.295a.943.943 0 0 0 1.45-.012l.002-.001L20.22 4.372a1 1 0 0 1 1.407-.15z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCheck;
