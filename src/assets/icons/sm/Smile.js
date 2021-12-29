import * as React from 'react';

const SvgSmile = props => (
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
      d="M5.685 8.943a.75.75 0 0 0-1.37.613c.324.724.84 1.341 1.492 1.776A3.95 3.95 0 0 0 8 12c.78 0 1.54-.233 2.193-.668a4.182 4.182 0 0 0 1.492-1.776.75.75 0 1 0-1.37-.613 2.684 2.684 0 0 1-.954 1.14A2.45 2.45 0 0 1 8 10.5a2.45 2.45 0 0 1-1.36-.416 2.684 2.684 0 0 1-.955-1.14zM5 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm4.293.707a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM4.11 4.11a5.5 5.5 0 1 1 7.78 7.78 5.5 5.5 0 0 1-7.78-7.78z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSmile;
