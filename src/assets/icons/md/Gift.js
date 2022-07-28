import * as React from 'react';

const SvgGift = props => (
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
      d="M21.11 6.87A3 3 0 0 0 19 6h-5l1.8-2.4a1 1 0 1 0-1.6-1.2L12 5.33 9.8 2.4a1 1 0 0 0-1.6 1.2L10 6H5a3 3 0 0 0-2.768 1.846A3 3 0 0 0 2 9v3a3 3 0 0 0 .89 2.1l.11.1V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4.8l.11-.09A3 3 0 0 0 22 12V9a3 3 0 0 0-.89-2.13ZM19.7 8.29A1 1 0 0 1 20 9v3a1 1 0 0 1-.3.7 1 1 0 0 1-.7.3h-6V8h6a1 1 0 0 1 .7.29ZM4 9a1 1 0 0 1 1-1h6v5H5a1 1 0 0 1-.921-.615A1 1 0 0 1 4 12V9Zm1.3 10.71A1 1 0 0 1 5 19v-4h6v5H6a1 1 0 0 1-.7-.29ZM19 19a1 1 0 0 1-.3.7 1 1 0 0 1-.7.3h-5v-5h6v4Z"
    />
  </svg>
);

export default SvgGift;
