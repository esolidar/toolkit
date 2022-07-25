import * as React from 'react';

const SvgGoBottom = props => (
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
      d="M12 2a1 1 0 0 1 1 1v11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5-.007.007a.997.997 0 0 1-.697.286h-.006a.996.996 0 0 1-.697-.286l-.008-.008-5-4.999a1 1 0 1 1 1.415-1.414L11 14.586V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgGoBottom;
