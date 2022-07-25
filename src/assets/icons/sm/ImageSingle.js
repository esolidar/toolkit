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
    <path fill={props.color} d="M10 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75H1.75ZM13.5 9.282V2.5h-11v5.528c.217-.017.435-.025.653-.025a7.82 7.82 0 0 1 5.282 1.875C9.437 9.413 10.6 8.997 11.817 9c.582 0 1.158.127 1.683.282Zm-3.966 1.75A7.82 7.82 0 0 1 10.82 13.5h2.68v-2.644c-.612-.202-1.149-.357-1.68-.356h-.005c-.744-.002-1.509.213-2.28.532ZM2.5 13.5V9.534c.22-.021.44-.032.662-.031h.02A6.32 6.32 0 0 1 9.23 13.5H2.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgImageSingle;
