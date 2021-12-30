import * as React from 'react';

const SvgLinkedin = props => (
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
      d="M7.543 20H4.197V9.271h3.346V20zM5.868 7.808A1.95 1.95 0 0 1 3.93 5.86c0-.512.205-1.002.568-1.364a1.942 1.942 0 0 1 2.74 0c.364.362.568.852.568 1.364a1.95 1.95 0 0 1-1.938 1.948zM20.066 20h-3.339v-5.223c0-1.244-.025-2.84-1.74-2.84-1.739 0-2.006 1.352-2.006 2.75V20H9.64V9.271h3.21v1.464h.046c.447-.843 1.538-1.733 3.166-1.733 3.386 0 4.009 2.22 4.009 5.105V20h-.004z"
    />
  </svg>
);

export default SvgLinkedin;
