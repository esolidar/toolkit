import * as React from 'react';

const SvgUpload = props => (
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
      d="M12.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 5.414V15a1 1 0 1 0 2 0V5.414l2.293 2.293a1 1 0 1 0 1.414-1.414l-4-4Z"
    />
    <path
      fill="#6C7679"
      d="M4 17a1 1 0 1 0-2 0v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"
    />
  </svg>
);

export default SvgUpload;
