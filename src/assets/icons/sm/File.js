import * as React from 'react';

const SvgFile = props => (
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
      d="M4.063 1c-.536 0-1.057.202-1.446.573A1.97 1.97 0 0 0 2 3v10c0 .543.227 1.055.617 1.427.39.37.91.573 1.446.573h7.875c.535 0 1.055-.202 1.445-.573A1.97 1.97 0 0 0 14 13V5.917a.75.75 0 0 0-.225-.536l-4.25-4.167A.75.75 0 0 0 9 1H4.062Zm-.411 1.66a.597.597 0 0 1 .41-.16H7.5v3.75c0 .414.336.75.75.75h4.25v6a.47.47 0 0 1-.152.34.597.597 0 0 1-.41.16H4.061a.597.597 0 0 1-.41-.16A.47.47 0 0 1 3.5 13V3c0-.12.05-.244.152-.34Zm8.102 2.84L9 2.8v2.7h2.754Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFile;
