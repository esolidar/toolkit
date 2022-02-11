import * as React from 'react';

const SvgFilm = props => (
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
      d="M2 4.962v14.076A2.962 2.962 0 0 0 4.962 22h14.076A2.962 2.962 0 0 0 22 19.038V4.962A2.962 2.962 0 0 0 19.038 2H4.962A2.962 2.962 0 0 0 2 4.962zm2 0C4 4.431 4.43 4 4.962 4H6v2H4V4.962zM4 8h2v3H4V8zm16-2V4.962A.962.962 0 0 0 19.038 4H18v2h2zm-2 2h2v3h-2V8zm-2-4H8v7h8V4zM4 18v1.038c0 .531.43.962.962.962H6v-2H4zm2-2H4v-3h2v3zm2 4h8v-7H8v7zm10 0v-2h2v1.038c0 .531-.43.962-.962.962H18zm0-4h2v-3h-2v3z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFilm;