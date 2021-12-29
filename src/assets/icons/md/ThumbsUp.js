import * as React from 'react';

const SvgThumbsUp = props => (
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
      d="M11.552 2.052A2 2 0 0 1 14 3.999v5h5a3.001 3.001 0 0 1 2.895 3.79l-1.91 7a3 3 0 0 1-2.895 2.21H3a1 1 0 1 1 0-2h14.09a1 1 0 0 0 .965-.736l1.91-7A1 1 0 0 0 19 11h-6a1 1 0 0 1-1-1V4l-.005.005-6.266 6.678A1 1 0 0 1 5 11H3a1 1 0 1 1 0-2h1.567l5.968-6.36a2 2 0 0 1 1.017-.588z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgThumbsUp;
