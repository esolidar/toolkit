import * as React from 'react';

const SvgGoTop = props => (
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
      d="M2 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm9.292 3.294-5 4.999a1 1 0 1 0 1.415 1.414L11 9.414V21a1 1 0 1 0 2 0V9.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5A.998.998 0 0 0 12.003 6h-.006a.997.997 0 0 0-.705.294Z"
    />
  </svg>
);

export default SvgGoTop;
