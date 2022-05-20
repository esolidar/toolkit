import * as React from 'react';

const SvgExternalLink = props => (
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
      d="M13.72 8.86a.75.75 0 0 1 1.28.53v3.47A2.15 2.15 0 0 1 12.86 15H3.14a2.09 2.09 0 0 1-1.51-.63A2.13 2.13 0 0 1 1 12.86V3.14a2.09 2.09 0 0 1 .63-1.51A2.09 2.09 0 0 1 3.14 1h3.47a.75.75 0 0 1 0 1.5H3.14a.65.65 0 0 0-.64.64v9.72a.65.65 0 0 0 .64.64h9.72a.65.65 0 0 0 .64-.64V9.39c0-.199.08-.39.22-.53Z"
    />
    <path
      fill="#6C7679"
      d="M14.782 1.218a.71.71 0 0 1 .158.242c.04.092.06.19.06.29v3.47a.75.75 0 1 1-1.5 0V3.56l-5 5A.75.75 0 0 1 7.44 7.5l5-5h-1.66a.75.75 0 0 1 0-1.5h3.47c.1 0 .198.02.29.06a.71.71 0 0 1 .242.158Z"
    />
  </svg>
);

export default SvgExternalLink;
