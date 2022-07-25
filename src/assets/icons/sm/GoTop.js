import * as React from 'react';

const SvgGoTop = props => (
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
      d="M2 1.5A.75.75 0 0 0 2 3h12a.75.75 0 0 0 0-1.5H2Zm6 3a.747.747 0 0 1 .53.22l4.334 4.333a.75.75 0 1 1-1.061 1.06L8.75 7.062v7.189a.75.75 0 0 1-1.5 0V7.06l-3.053 3.054a.75.75 0 1 1-1.06-1.061l4.326-4.327A.748.748 0 0 1 8 4.5Z"
    />
  </svg>
);

export default SvgGoTop;
