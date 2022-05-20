import * as React from 'react';

const SvgBlock = props => (
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
      d="M12 2a10 10 0 0 0-7.08 17.063l.009.008A10 10 0 1 0 19.07 4.93l-.008-.008A10 10 0 0 0 12 2Zm4.905 3.68A8 8 0 0 0 5.68 16.905L16.905 5.68Zm-9.81 12.64A8 8 0 0 0 18.32 7.095L7.095 18.32Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBlock;
