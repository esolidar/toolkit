import * as React from 'react';

const SvgAward = props => (
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
      d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.06 2.44a1.5 1.5 0 1 1 2.12 2.121 1.5 1.5 0 0 1-2.12-2.122Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a7.5 7.5 0 0 0-6.173 11.76l-3.704 6.76a1 1 0 0 0 1.041 1.466l6-1a1 1 0 0 0 .776-.646l1.225-3.387a7.488 7.488 0 0 0 1.67 0l1.225 3.387a1 1 0 0 0 .776.646l6 1a1 1 0 0 0 1.04-1.467l-3.703-6.759A7.5 7.5 0 0 0 12 2Zm4.239 11.005A5.496 5.496 0 0 1 12 15a5.5 5.5 0 1 1 4.239-1.995Zm.503 2.306 2.392 4.364-3.392-.565-.957-2.646a7.499 7.499 0 0 0 1.957-1.153ZM4.866 19.675l2.392-4.364a7.5 7.5 0 0 0 1.957 1.153l-.957 2.646-3.392.565Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAward;
