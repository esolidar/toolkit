import * as React from 'react';

const SvgEdit3 = props => (
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
      d="M1.86 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-18a1 1 0 0 1-1-1ZM18.04 4.108l-8.996 9-.427 2.413 2.415-.425 8.997-9 .001-.002a.372.372 0 0 0 0-.527l-1.458-1.46a.377.377 0 0 0-.532 0Zm-1.412-1.416a2.376 2.376 0 0 1 3.356 0l.001.001 1.457 1.457a2.378 2.378 0 0 1 .698 1.68 2.373 2.373 0 0 1-.697 1.68h-.001l-9.219 9.223a1 1 0 0 1-.534.278l-4.132.728A1 1 0 0 1 6.4 16.58l.73-4.13a1 1 0 0 1 .278-.533l9.22-9.225Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEdit3;
