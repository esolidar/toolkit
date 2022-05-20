import * as React from 'react';

const SvgPinBold = props => (
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
      d="M4.383 9.35c.157-.142.35-.24.557-.281l6.633-1.326 3.322-5.208a1.171 1.171 0 0 1 1.803-.199l4.959 4.96a1.171 1.171 0 0 1-.198 1.816l-5.207 3.312-1.325 6.636a1.171 1.171 0 0 1-1.974.597l-3.597-3.598-5.649 5.648a1 1 0 0 1-1.414-1.414l5.649-5.649-3.6-3.6a1.17 1.17 0 0 1 .041-1.694Z"
    />
  </svg>
);

export default SvgPinBold;
