import * as React from 'react';

const SvgImageSingle = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M14 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-.707 2.293a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415Z"
      clipRule="evenodd"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M3 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm17 12.029V4H4v7.736c.34-.03.68-.044 1.021-.044a11.181 11.181 0 0 1 7.89 2.982c1.452-.6 3.01-.908 4.586-.904a11.95 11.95 0 0 1 2.503.259Zm-5.664 2.247A11.183 11.183 0 0 1 16.113 20H20v-3.918a10.033 10.033 0 0 0-2.502-.312h-.005a9.923 9.923 0 0 0-3.157.506ZM4 20v-6.256a10.129 10.129 0 0 1 1.06-.052A9.182 9.182 0 0 1 14.028 20H4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgImageSingle;