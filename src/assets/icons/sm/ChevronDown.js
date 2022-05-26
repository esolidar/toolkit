import * as React from 'react';

const SvgChevronDown = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox}
    style={{
      enableBackground: 'new 0 0 16 16',
    }}
    xmlSpace="preserve"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path
      d="M8 12.7c-.4 0-.7-.1-1-.4L1.5 6.5c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0L8 11.2l5.5-5.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L9 12.3c-.3.3-.6.4-1 .4z"
      style={{
        fill: '#6c7679',
      }}
    />
  </svg>
);

export default SvgChevronDown;
