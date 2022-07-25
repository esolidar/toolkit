import * as React from 'react';

const SvgCreditCard = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill={props.color} d="M10.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75Zm12.5.75V6h-11V3.5h11Zm0 4h-11v5h11v-5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCreditCard;
