import * as React from 'react';

const SvgCalendar = props => (
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
      fillRule="evenodd"
      d="M8 3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3V3a1 1 0 1 0-2 0v1H8V3zm12 7V6h-2v1a1 1 0 1 1-2 0V6H8v1a1 1 0 0 1-2 0V6H4v4h16zM4 12h16v8H4v-8z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCalendar;
