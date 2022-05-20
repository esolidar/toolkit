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
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M8 .995a5.06 5.06 0 0 1 3.53 1.435A4.852 4.852 0 0 1 13 5.92c0 3.71-4.25 8.62-4.44 8.82a.73.73 0 0 1-1.12 0C7.25 14.54 3 9.63 3 5.92a4.81 4.81 0 0 1 1.47-3.49A5.06 5.06 0 0 1 8 .995ZM4.5 5.92c0 2.42 2.38 5.73 3.5 7.15 1.12-1.42 3.5-4.73 3.5-7.15a3.341 3.341 0 0 0-1-2.41 3.55 3.55 0 0 0-5 0 3.34 3.34 0 0 0-1 2.41Zm2.656-.949A1.33 1.33 0 1 1 8.842 7.03a1.33 1.33 0 0 1-1.686-2.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMapPin;
