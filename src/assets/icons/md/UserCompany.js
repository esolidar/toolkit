import * as React from 'react';

const SvgUserCompany = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      fill="#6C7679"
      d="M7 10a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7Zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1-9a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H7Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M2.293 2.293A1 1 0 0 1 3 2h12a1 1 0 0 1 1 1v7h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 .293-.707ZM16 12h4v8h-4v-8Zm-2-8v16H4V4h10Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUserCompany;
