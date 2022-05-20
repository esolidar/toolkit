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
      d="M8.53 1.22a.75.75 0 0 0-1.06 0L4.803 3.886a.75.75 0 0 0 1.06 1.061L7.25 3.561V9.75a.75.75 0 0 0 1.5 0V3.56l1.386 1.387a.75.75 0 1 0 1.06-1.06L8.53 1.22Z"
    />
    <path
      fill="#6C7679"
      d="M2.75 11.083a.75.75 0 1 0-1.5 0v1.334A2.083 2.083 0 0 0 3.333 14.5h9.334a2.083 2.083 0 0 0 2.083-2.083v-1.334a.75.75 0 1 0-1.5 0v1.334a.583.583 0 0 1-.583.583H3.333a.583.583 0 0 1-.583-.583v-1.334Z"
    />
  </svg>
);

export default SvgUpload;
