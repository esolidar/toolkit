import * as React from 'react';

const SvgActivity = props => (
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
      d="M5 3a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1H5zM3 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1zm7.936-8.351A1 1 0 0 0 9.2 6.4L6.5 10H3a1 1 0 1 0 0 2h4a1 1 0 0 0 .8-.4l1.905-2.54 2.359 6.291a1 1 0 0 0 1.736.249l2.7-3.6H21a1 1 0 1 0 0-2h-5a1 1 0 0 0-.8.4l-1.905 2.54-2.359-6.291z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgActivity;
