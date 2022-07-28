import * as React from 'react';

const SvgPlay = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.346 2.06a1.596 1.596 0 0 0-1.71-.112 1.73 1.73 0 0 0-.65.646 1.78 1.78 0 0 0-.236.896v9.02c-.002.315.08.624.236.896.156.271.38.494.65.646a1.588 1.588 0 0 0 1.71-.111l6.192-4.51c.22-.164.4-.38.524-.628a1.8 1.8 0 0 0-.524-2.234L6.346 2.06Z"
    />
  </svg>
);

export default SvgPlay;
