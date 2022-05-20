import * as React from 'react';

const SvgCustomerSupport = props => (
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
      d="M8.49 5.39A4.918 4.918 0 0 1 11.986 4h.028A4.918 4.918 0 0 1 17 8.84V9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2 2.04 2.04 0 0 1-2.007 2H12a1 1 0 1 0 0 2h3.013A4.04 4.04 0 0 0 19 18a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3v-.182A6.918 6.918 0 0 0 12 2a6.918 6.918 0 0 0-7 6.818V9a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2v-.16a4.918 4.918 0 0 1 1.49-3.45ZM19 16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2v5h2ZM5.986 11H7v5H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h.986Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCustomerSupport;
