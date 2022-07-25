import * as React from 'react';

const SvgDollarSign = props => (
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
      d="M12 2a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-3a2 2 0 0 0 0 4 4 4 0 0 1 1 7.873V21a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h3a2 2 0 0 0 0-4 4 4 0 0 1-1-7.873V3a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDollarSign;
