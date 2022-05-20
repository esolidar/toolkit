import * as React from 'react';

const SvgReports = props => (
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
      fillRule="evenodd"
      d="M3 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm1 18V4h16v16H4ZM7 5.546a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7ZM6 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm12.287 1.773a1 1 0 1 0-1.714-1.03l-2.85 4.749-3.997-2.284a1 1 0 0 0-1.328.314l-2.034 3.054a1 1 0 0 0 1.664 1.108l1.517-2.276 4.035 2.306a1 1 0 0 0 1.353-.353l3.354-5.588Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgReports;
