import * as React from 'react';

const SvgChevronRight = props => (
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
      d="M8.276 4.31a1 1 0 0 1 1.414-.034l6.771 6.45.016.015a1.777 1.777 0 0 1 0 2.518l-.016.016-6.771 6.45a1 1 0 1 1-1.38-1.45L14.9 12 8.31 5.724a1 1 0 0 1-.034-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronRight;
