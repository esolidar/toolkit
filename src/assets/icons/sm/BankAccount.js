import * as React from 'react';

const SvgBankAccount = props => (
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
      d="M8.75 1.217a1.408 1.408 0 0 0-1.495 0L1.567 4.753a1.223 1.223 0 0 0-.48 1.477c.205.51.733.81 1.257.77H3v3.583H2a.75.75 0 0 0-.75.75V14c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-2.667a.75.75 0 0 0-.75-.75h-1V7h.656c.524.04 1.052-.26 1.257-.77a1.223 1.223 0 0 0-.48-1.477L8.751 1.217ZM8.004 2.52 3.207 5.5h9.587L8.003 2.519ZM11.5 7H8.75v3.583h2.75V7Zm-7 3.583V7h2.75v3.583H4.5Zm-1.75 1.5v1.167h10.5v-1.167H2.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBankAccount;
