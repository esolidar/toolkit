import * as React from 'react';

const SvgClearFormat = props => (
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
      d="M8.68 1h3.987a2.083 2.083 0 0 1 2.083 2.083v1.334a.75.75 0 0 1-1.5 0V3.083a.583.583 0 0 0-.583-.583H9.268l-.385 1.735a.75.75 0 1 1-1.464-.325l.313-1.41H6.667a.75.75 0 1 1 0-1.5h2.012zm-1.903 9.254c.405.09.66.49.57.895L6.935 13h1.732a.75.75 0 0 1 0 1.5H3.333a.75.75 0 0 1 0-1.5h2.065l.485-2.177a.75.75 0 0 1 .894-.57zM2.53 1.47a.75.75 0 0 0-1.06 1.06l12 12a.75.75 0 1 0 1.06-1.06l-12-12z"
    />
  </svg>
);

export default SvgClearFormat;
