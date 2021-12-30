import * as React from 'react';

const SvgAttachment = props => (
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
      d="M13.397 2.425a1 1 0 0 1 0 1.414l-7.572 7.57a5 5 0 0 0 .182 7.245 5.232 5.232 0 0 0 7.116-.399l.014-.014 5.77-5.77a2.503 2.503 0 0 0-.31-3.8 2.628 2.628 0 0 0-3.342.38l-.016.016-3.05 3.05a2 2 0 0 0 0 2.828 1 1 0 1 1-1.414 1.414 4 4 0 0 1 0-5.656l3.042-3.043a4.628 4.628 0 0 1 5.926-.63 4.502 4.502 0 0 1 .578 6.855l-5.763 5.763a7.232 7.232 0 0 1-9.874.506 7 7 0 0 1-.273-10.16l7.572-7.57a1 1 0 0 1 1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAttachment;
