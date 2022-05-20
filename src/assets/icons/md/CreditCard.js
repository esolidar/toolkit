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
    <path fill="#6C7679" d="M16 14a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z" />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Zm18 1v3H4V6h16Zm0 5H4v7h16v-7Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCreditCard;
