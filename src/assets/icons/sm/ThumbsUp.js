import * as React from 'react';

const SvgThumbsUp = props => (
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
      d="M7.75 1.037a1.444 1.444 0 0 1 1.768 1.406V6.01h3.343a2.14 2.14 0 0 1 2.064 2.702l-.002.006-1.325 4.709A2.14 2.14 0 0 1 11.534 15H1.75a.75.75 0 0 1 0-1.5h9.784a.64.64 0 0 0 .617-.47l.002-.007 1.325-4.708a.64.64 0 0 0-.617-.805H8.768a.75.75 0 0 1-.75-.75V2.586L3.69 7.27a.75.75 0 0 1-.551.241H1.75a.75.75 0 0 1 0-1.5h1.06l4.204-4.546c.197-.213.454-.362.737-.427Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgThumbsUp;
