import * as React from 'react';

const SvgPage = props => (
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
      d="M3.586 2.586A2 2 0 0 1 5 2h11a1 1 0 0 1 .78.375l4 5A1 1 0 0 1 21 8v12a2 2 0 0 1-2 2h-1a1 1 0 1 1 0-2h1V8.35L15.52 4H5v7a1 1 0 1 1-2 0V4a2 2 0 0 1 .586-1.414Zm3.338 12.147a1 1 0 0 1 .002 1.415l-1.891 1.896a.119.119 0 0 0 0 .168l.001.001 1.747 1.752a.12.12 0 0 0 .129.026.117.117 0 0 0 .038-.026l1.896-1.895a1 1 0 0 1 1.414 1.414l-1.895 1.895a2.12 2.12 0 0 1-2.997 0l-1.747-1.753a2.123 2.123 0 0 1-.46-2.309c.107-.257.263-.49.46-.687l1.889-1.895a1 1 0 0 1 1.414-.002Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M10.317 10.161a2.119 2.119 0 0 1 2.31.46l1.752 1.753a2.12 2.12 0 0 1 0 2.996l-1.896 1.891a1 1 0 1 1-1.412-1.416l1.894-1.89a.119.119 0 0 0 0-.167l-1.753-1.753a.12.12 0 0 0-.084-.035.12.12 0 0 0-.084.035l-1.897 1.89a1 1 0 1 1-1.412-1.415l1.895-1.89a2.13 2.13 0 0 1 .687-.459Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M10.707 14.287a1 1 0 0 1 0 1.415l-2.005 2.005a1 1 0 0 1-1.415-1.414l2.006-2.006a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPage;
