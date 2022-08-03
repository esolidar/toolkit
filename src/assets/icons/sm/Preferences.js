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
      d="M6.25 7.854a2 2 0 1 0-1.5 0v3.48a.75.75 0 0 0 1.5 0v-3.48ZM10.5 4a.75.75 0 0 1 .75.75v3.313a2 2 0 1 1-1.5 0V4.75A.75.75 0 0 1 10.5 4Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V1.75Zm1.5.75v11h11v-11h-11Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPreferences;
