import * as React from 'react';

const SvgSidebarExpand = props => (
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
      d="M8.248 6.307a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.004-1.114L10.128 8l-1.88-1.693Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1 3.139A2.14 2.14 0 0 1 3.139 1h9.722A2.14 2.14 0 0 1 15 3.139v9.722A2.139 2.139 0 0 1 12.861 15H3.14A2.139 2.139 0 0 1 1 12.861V3.14ZM3.139 2.5a.639.639 0 0 0-.639.639v9.722c0 .353.286.639.639.639H5v-11H3.139Zm9.722 11H6.5v-11h6.361c.353 0 .639.286.639.639v9.722a.639.639 0 0 1-.639.639Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSidebarExpand;
