import * as React from 'react';

const SvgEdit = props => (
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
      d="M3.25 3.5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2a2.25 2.25 0 0 1-2.25 2.25h-8A2.25 2.25 0 0 1 1 12.25v-8A2.25 2.25 0 0 1 3.25 2H6.5a.75.75 0 0 1 0 1.5H3.25Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M11.954 2.942a.25.25 0 0 0-.345.01L6.95 7.61l-.288 1.728 1.719-.287 4.614-4.825a.25.25 0 0 0-.013-.358l-1.028-.926Zm-1.405-1.051a1.75 1.75 0 0 1 2.408-.064l1.028.926a1.75 1.75 0 0 1 .095 2.51l-4.788 5.005a.75.75 0 0 1-.419.222l-3 .5a.75.75 0 0 1-.863-.863l.5-3a.75.75 0 0 1 .21-.407l4.829-4.83Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEdit;
