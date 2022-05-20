import * as React from 'react';

const SvgHome = props => (
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
      d="M12.707 2.293a1 1 0 0 0-1.414 0l-9 9a1 1 0 1 0 1.414 1.414L4 12.414V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8.586l.293.293a1 1 0 0 0 1.414-1.414l-9-9ZM18 10.414l-6-6-6 6V20h5v-5a1 1 0 1 1 2 0v5h5v-9.586Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgHome;
