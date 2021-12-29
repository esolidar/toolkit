import * as React from 'react';

const SvgUnderline = props => (
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
      d="M4.5 2A.75.75 0 0 0 3 2v5c0 1.334.525 2.614 1.462 3.559A4.982 4.982 0 0 0 8 12.036c1.328 0 2.6-.532 3.538-1.477A5.054 5.054 0 0 0 13 7V2a.75.75 0 0 0-1.5 0v5c0 .94-.37 1.84-1.027 2.502A3.482 3.482 0 0 1 8 10.536a3.482 3.482 0 0 1-2.473-1.034A3.554 3.554 0 0 1 4.5 7V2zM2 13a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H2z"
    />
  </svg>
);

export default SvgUnderline;
