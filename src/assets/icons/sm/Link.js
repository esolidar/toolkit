import * as React from 'react';

const SvgLink = props => (
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
      d="M5.19 6.799a.75.75 0 0 1 .002 1.06l-2.268 2.276a.59.59 0 0 0 0 .837v.001l2.097 2.103a.593.593 0 0 0 .838 0l2.274-2.274a.75.75 0 0 1 1.061 1.06L6.92 14.137a2.094 2.094 0 0 1-2.959 0l-2.097-2.104a2.095 2.095 0 0 1-.454-2.28c.105-.254.26-.484.454-.679L4.13 6.8a.75.75 0 0 1 1.06 0zM9.753 1.41a2.092 2.092 0 0 1 2.28.453l2.104 2.104a2.094 2.094 0 0 1 0 2.96l-2.275 2.268a.75.75 0 0 1-1.06-1.062l2.274-2.268a.593.593 0 0 0 0-.837l-2.104-2.104a.593.593 0 0 0-.837 0L7.859 5.192A.75.75 0 0 1 6.8 4.13l2.274-2.267c.194-.194.425-.349.679-.454z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M10.528 5.465a.75.75 0 0 1 0 1.06l-4.002 4.003a.75.75 0 0 1-1.06-1.06l4.002-4.003a.75.75 0 0 1 1.06 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgLink;
