import * as React from 'react';

const SvgShare3 = props => (
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
      d="M8.701 2.062a.75.75 0 0 1 .81.14l5.25 4.9a.75.75 0 0 1 0 1.096l-5.25 4.9a.75.75 0 0 1-1.261-.548V10.5h-.322a4.78 4.78 0 0 0-3.075 1.122l-2.62 2.202a.75.75 0 0 1-1.188-.829l1.448-4.013A6.345 6.345 0 0 1 4.8 5.952a6.276 6.276 0 0 1 3.451-1.15V2.75a.75.75 0 0 1 .451-.688ZM8.417 6.3c-.985 0-1.946.306-2.753.877a4.845 4.845 0 0 0-1.76 2.314l-.502 1.391.486-.408A6.28 6.28 0 0 1 7.928 9H9a.75.75 0 0 1 .75.75v1.074l3.4-3.174-3.4-3.174V5.55A.75.75 0 0 1 9 6.3h-.583Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgShare3;
