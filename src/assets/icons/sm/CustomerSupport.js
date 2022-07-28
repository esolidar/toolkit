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
      fill={props.color}
      fillRule="evenodd"
      d="M5.542 3.474A3.442 3.442 0 0 1 7.99 2.5h.02a3.442 3.442 0 0 1 3.49 3.387V6h-.09A1.411 1.411 0 0 0 10 7.417v3.333a1.411 1.411 0 0 0 1.41 1.417h.01a1.276 1.276 0 0 1-1.175.833H8.75a.75.75 0 0 0 0 1.5h1.51a2.777 2.777 0 0 0 2.705-2.334A2.084 2.084 0 0 0 15 10.083v-2a2.083 2.083 0 0 0-2-2.081V5.87A4.942 4.942 0 0 0 8 1a4.942 4.942 0 0 0-5 4.87V6a2.083 2.083 0 0 0-2 2.082v2a2.083 2.083 0 0 0 2.083 2.084H4.59A1.411 1.411 0 0 0 6 10.75V7.417A1.412 1.412 0 0 0 4.59 6H4.5v-.113c.015-.91.39-1.778 1.042-2.413ZM2.671 7.67a.582.582 0 0 1 .412-.171H4.5v3.167H3.083a.583.583 0 0 1-.583-.584v-2c0-.154.061-.303.17-.412Zm10.246-.17a.583.583 0 0 1 .583.583v2a.583.583 0 0 1-.583.584H11.5V7.5h1.417Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCustomerSupport;
