import * as React from 'react';

const SvgHeartBold = props => (
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
      d="M19.128 4.132A5.448 5.448 0 0 0 12.27 5.67l-.27.31-.234-.266a5.468 5.468 0 0 0-6.892-1.582 5.6 5.6 0 0 0-.942 9.128l6.858 6.73a1.688 1.688 0 0 0 2.41.01l6.814-6.69A5.601 5.601 0 0 0 22 9.028a5.54 5.54 0 0 0-2.872-4.896Z"
    />
  </svg>
);

export default SvgHeartBold;
