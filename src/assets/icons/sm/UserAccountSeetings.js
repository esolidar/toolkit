import * as React from 'react';

const SvgUserAccountSeetings = props => (
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
      d="M11.345 6.72a.75.75 0 0 1 1.06 0l1.883 1.88a.75.75 0 0 1 0 1.062l-4.825 4.826a.75.75 0 0 1-.428.213l-2.183.3a.75.75 0 0 1-.845-.845l.3-2.183a.75.75 0 0 1 .213-.428l4.825-4.825Zm.53 1.59L7.76 12.427l-.131.953.953-.13 4.116-4.118-.821-.822ZM3.879 1.879A3 3 0 1 1 8.12 6.12a3 3 0 0 1-4.24-4.24ZM6 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-.966 5.554a4.75 4.75 0 0 1 1.013-.045.75.75 0 1 1-.094 1.497A3.25 3.25 0 0 0 2.5 12.751v.749h1.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75v-1.498a4.751 4.751 0 0 1 4.034-4.698Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUserAccountSeetings;
