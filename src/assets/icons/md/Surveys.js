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
      d="M18.21 2a1 1 0 1 0 0 2H19a1 1 0 0 1 .995 1.1l-.78 7.8a1 1 0 0 0 1.99.2l.78-7.8A3.002 3.002 0 0 0 19 2h-.79ZM2.533 4.855a1 1 0 0 0-.821 1.152l2.585 15.459a1 1 0 0 0 1.152.821l11.893-1.99a1 1 0 0 0 .82-1.15l-2.585-15.46a1 1 0 0 0-1.151-.821L2.533 4.856ZM6.105 20.15 3.849 6.663l9.92-1.66 2.256 13.487-9.92 1.66Zm5.954-10.385a1 1 0 0 0-.33-1.972l-4.864.814a1 1 0 0 0 .33 1.972l4.864-.814Zm-.643 2.764a1 1 0 0 1-.822 1.15l-2.481.414a1 1 0 1 1-.33-1.972l2.482-.414a1 1 0 0 1 1.151.822Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSurveys;
