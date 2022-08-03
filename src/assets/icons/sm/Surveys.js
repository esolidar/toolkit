import * as React from 'react';

const SvgSurveys = props => (
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
      d="M1.01 3.768a.75.75 0 0 1 .616-.863l7.929-1.327a.75.75 0 0 1 .863.616l1.724 10.307a.75.75 0 0 1-.616.863L3.598 14.69a.75.75 0 0 1-.864-.616L1.01 3.768Zm1.603.492 1.477 8.827 6.449-1.079-1.476-8.826-6.45 1.078Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8.62 5.474a.75.75 0 0 1-.611.867l-3.13.543a.75.75 0 0 1-.257-1.478l3.13-.543a.75.75 0 0 1 .868.611Zm-.975 2.614a.75.75 0 0 1-.617.863l-1.654.276a.75.75 0 1 1-.247-1.48l1.654-.275a.75.75 0 0 1 .864.616Zm3.696-6.338a.75.75 0 0 1 .75-.75h.527a2.083 2.083 0 0 1 2.073 2.292v.002l-.52 5.033a.75.75 0 0 1-1.492-.154l.52-5.031a.589.589 0 0 0-.148-.45.583.583 0 0 0-.433-.192h-.527a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSurveys;
