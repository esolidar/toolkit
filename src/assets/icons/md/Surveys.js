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
      d="M18.21 2a1 1 0 1 0 0 2H19a1 1 0 0 1 .995 1.1l-.78 7.8a1 1 0 1 0 1.99.2l.78-7.8A2.999 2.999 0 0 0 19 2h-.79zM2.533 4.855a1 1 0 0 0-.822 1.152l2.586 15.459a1 1 0 0 0 1.152.821l11.892-1.99a1 1 0 0 0 .822-1.15l-2.586-15.46a1 1 0 0 0-1.151-.821L2.533 4.856zM6.105 20.15 3.849 6.663l9.92-1.66 2.256 13.487-9.92 1.66zm5.954-10.385a1 1 0 1 0-.33-1.972l-4.864.814a1 1 0 0 0 .33 1.972l4.864-.814zm-.643 2.764a1 1 0 0 1-.822 1.15l-2.482.414a1 1 0 1 1-.329-1.972l2.482-.414a1 1 0 0 1 1.151.822z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSurveys;
