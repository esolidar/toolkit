import * as React from 'react';

const SvgMapPin = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill="#6C7679" d="M10.729 7.449a2 2 0 1 1 2.525 3.102 2 2 0 0 1-2.525-3.102Z" />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M13.406 2.091A7 7 0 0 1 19 9c0 5.095-5.524 11.783-6.183 12.581l-.057.069a.999.999 0 0 1-1.52 0 7.39 7.39 0 0 0-.057-.069C10.524 20.783 5 14.095 5 9a7 7 0 0 1 8.406-6.909ZM7 9c0 3.55 3.44 8.41 5 10.41 1.56-2.02 5-6.86 5-10.41A5 5 0 1 0 7 9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMapPin;
