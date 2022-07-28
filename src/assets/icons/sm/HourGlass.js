import * as React from 'react';

const SvgHourGlass = props => (
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
      d="M2 1.75A.75.75 0 0 1 2.75 1h10.5a.75.75 0 0 1 0 1.5h-1.167v1.917a4.083 4.083 0 0 1-1.725 3.333 4.082 4.082 0 0 1 1.725 3.333V13h1.167a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h1.167v-1.917A4.083 4.083 0 0 1 5.64 7.75a4.082 4.082 0 0 1-1.724-3.333V2.5H2.75A.75.75 0 0 1 2 1.75ZM5.417 13h5.166v-1.917a2.583 2.583 0 0 0-5.166 0V13Zm0-10.5h5.166v1.917a2.583 2.583 0 0 1-5.166 0V2.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgHourGlass;
