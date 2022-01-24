import * as React from 'react';

const SvgMaximize = props => (
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
      d="M3.692 2A1.692 1.692 0 0 0 2 3.692V9a1 1 0 0 0 2 0V4h5a1 1 0 0 0 0-2H3.692zM15 2a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0V3.692A1.692 1.692 0 0 0 20.308 2H15zm6 12a1 1 0 0 1 1 1v5.308A1.692 1.692 0 0 1 20.308 22H15a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1zM4 15a1 1 0 1 0-2 0v5.308A1.692 1.692 0 0 0 3.692 22H9a1 1 0 1 0 0-2H4v-5z"
    />
  </svg>
);

export default SvgMaximize;
