import * as React from 'react';

const SvgShare2 = props => (
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
      d="M15.172 3.172a4 4 0 1 1-.19 5.454l-5.07 2.536a4 4 0 0 1 0 1.675l5.071 2.537a4 4 0 1 1-.894 1.789l-5.072-2.537a4.03 4.03 0 0 1-1.486 1.07 4 4 0 1 1 1.486-6.323l5.072-2.536a4 4 0 0 1 1.083-3.665zM7.828 12.81a.988.988 0 0 0-.082.166A1.999 1.999 0 0 1 4 12a2 2 0 0 1 3.756-.958 1.012 1.012 0 0 0 .064.128l.028.065a2 2 0 0 1-.02 1.575zm8.353 4.36a2.001 2.001 0 0 0 3.233 2.244 2 2 0 1 0-3.17-2.37 1.025 1.025 0 0 1-.063.125zm.405-9.756a1.999 1.999 0 0 1-.332-.44 1.043 1.043 0 0 0-.082-.163 2 2 0 1 1 .414.603z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgShare2;
