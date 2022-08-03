import * as React from 'react';

const SvgCamera = props => (
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
      d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-1.414 2.586a2 2 0 1 1 2.828 2.828 2 2 0 0 1-2.828-2.828Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M9 3a1 1 0 0 0-.894.553L6.382 7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-1.382l-1.724-3.447A1 1 0 0 0 15 3H9ZM7.894 8.447 9.618 5h4.764l1.724 3.447A1 1 0 0 0 17 9h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 0 .894-.553Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCamera;
