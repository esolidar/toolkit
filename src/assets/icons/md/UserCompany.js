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
      fill={props.color}
      d="M7 10a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm1-9a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H7z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M2.293 2.293A1 1 0 0 1 3 2h12a1 1 0 0 1 1 1v7h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 .293-.707zM16 12h4v8h-4v-8zm-2-8v16H4V4h10z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUserCompany;
