import * as React from 'react';

const SvgEdit2 = props => (
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
      d="M16.263 4.151 5.378 15.081l-1.002 4.567 4.563-1.002L19.834 7.724a.478.478 0 0 0-.06-.653 1.004 1.004 0 0 1-.047-.044l-2.77-2.768a.99.99 0 0 1-.043-.046.478.478 0 0 0-.65-.062Zm-1.33-1.495a2.478 2.478 0 0 1 3.457.208l2.731 2.73a2.478 2.478 0 0 1 .159 3.512l-11.132 11.16a1 1 0 0 1-.494.27l-6.376 1.4a1 1 0 0 1-1.19-1.19l1.4-6.378a1 1 0 0 1 .267-.492L14.88 2.706l.055-.05Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEdit2;
