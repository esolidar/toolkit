import * as React from 'react';

const SvgImage = props => (
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
      d="M2.65 2.5a.13.13 0 0 0-.094.044.213.213 0 0 0-.056.147V9.75a.75.75 0 0 1-1.5 0V2.69c0-.437.166-.863.471-1.183A1.63 1.63 0 0 1 2.65 1h8.1a.75.75 0 0 1 0 1.5h-8.1Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M4 4.75A.75.75 0 0 1 4.75 4h9.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-8.5Zm2.821 7.75h5.365L9.72 10.085a.27.27 0 0 0-.092-.059.377.377 0 0 0-.28 0 .272.272 0 0 0-.092.059l-.005.005-2.43 2.41Zm6.679-.813-2.719-2.661a1.77 1.77 0 0 0-.593-.391 1.877 1.877 0 0 0-1.4 0 1.77 1.77 0 0 0-.595.393L5.5 11.698V5.5h8v6.187Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgImage;
