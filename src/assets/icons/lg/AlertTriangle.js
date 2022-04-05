import * as React from 'react';

const SvgAlertTriangle = props => (
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
      d="M19.969 11.751c.552 0 1 .517 1 1.154v7.692c0 .637-.448 1.154-1 1.154-.553 0-1-.517-1-1.154v-7.692c0-.637.447-1.154 1-1.154zm-1.414 15.414a2 2 0 1 1 2.829-2.828 2 2 0 0 1-2.83 2.828z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M17.986 2.57a4.076 4.076 0 0 1 5.651 1.545l11.68 20.945a6.031 6.031 0 0 1-5.288 8.942H10.093a6.03 6.03 0 0 1-6.028-5.934 6.025 6.025 0 0 1 .746-2.998l.003-.004L16.49 4.116c.35-.64.867-1.174 1.495-1.546zm-7.893 29.432h19.936a4.037 4.037 0 0 0 4.035-3.97c.01-.7-.16-1.392-.498-2.005l-.001-.002-11.68-20.946a2.074 2.074 0 0 0-3.642 0l-.003.007L6.563 26.035v.002a4.025 4.025 0 0 0 3.53 5.965z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAlertTriangle;
