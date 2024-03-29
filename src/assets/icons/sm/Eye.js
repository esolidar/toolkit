import * as React from 'react';

const SvgEye = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill={props.color} d="M6.586 9.414a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828Z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8 3.5c-2.593 0-4.949 1.485-6.551 3.342a1.654 1.654 0 0 0 .013 2.278c.533.564 1.41 1.397 2.517 2.094C5.085 11.91 6.47 12.5 8 12.5c1.53 0 2.915-.59 4.02-1.286 1.108-.697 1.985-1.53 2.518-2.094a1.655 1.655 0 0 0 .013-2.278C12.95 4.986 10.625 3.5 8 3.5ZM2.574 7.834C3.995 6.182 5.974 5 8 5c2.055 0 4.004 1.18 5.426 2.834l.03.032c.03.032.044.07.044.108a.155.155 0 0 1-.045.108l-.006.006c-.481.51-1.262 1.25-2.227 1.856C10.253 10.554 9.147 11 8 11c-1.147 0-2.253-.446-3.222-1.056-.965-.607-1.746-1.346-2.227-1.856l-.006-.006a.155.155 0 0 1-.045-.108c0-.038.015-.076.045-.108a.75.75 0 0 0 .029-.032Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEye;
