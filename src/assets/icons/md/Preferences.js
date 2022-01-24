import * as React from 'react';

const SvgPreferences = props => (
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
      d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm2 1v16h16V4H4zm6 7.828a2.999 2.999 0 1 0-2 0V17a1 1 0 1 0 2 0v-5.172zM9 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6-4a1 1 0 0 1 1 1v5.172a2.999 2.999 0 1 1-2 0V7a1 1 0 0 1 1-1zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPreferences;
