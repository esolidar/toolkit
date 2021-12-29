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
      d="M20 16h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-5h-.133a1.709 1.709 0 0 1-1.116-3.11l.007-.005 8.188-5.565a1.896 1.896 0 0 1 2.116 0l.005.003 8.182 5.566A1.71 1.71 0 0 1 20.133 11H20v5zM4.675 9l7.329-4.98L19.326 9h-.317a.961.961 0 0 0-.018 0H4.675zM18 11h-2v5h2v-5zM4 18v2h16v-2H4zm6-7h4v5h-4v-5zm-2 0H6v5h2v-5z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBankAccount;