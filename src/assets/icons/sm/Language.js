import * as React from 'react';

const SvgLanguage = props => (
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
      d="M1 1.75A.75.75 0 0 1 1.75 1h7.5a.75.75 0 0 1 0 1.5h-.14L6.2 6.139l1.58 1.58A.75.75 0 0 1 6.72 8.78L5.257 7.317 3.336 9.72a.75.75 0 0 1-1.172-.937L4.19 6.25l-.97-.97a.75.75 0 0 1 1.06-1.06l.852.852L7.19 2.5H1.75A.75.75 0 0 1 1 1.75Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M11 7a.75.75 0 0 1 .67.415l3.25 6.5a.75.75 0 1 1-1.34.67l-.543-1.085H8.963l-.543 1.085a.75.75 0 1 1-1.342-.67l3.25-6.5A.75.75 0 0 1 11 7Zm-1.286 5h2.572L11 9.427 9.714 12Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgLanguage;
