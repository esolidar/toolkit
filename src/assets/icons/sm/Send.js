import * as React from 'react';

const SvgSend = props => (
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
      d="M13.59 1.049a1.831 1.831 0 0 0-1 .045L2.248 4.539l-.003.002a1.832 1.832 0 0 0-.706 3.031l.012.011L3.774 9.71v3.846a.75.75 0 0 0 1.194.604l1.818-1.336 1.64 1.64a1.833 1.833 0 0 0 3.032-.706l.001-.004L14.906 3.41a1.83 1.83 0 0 0-1.316-2.36Zm-2.297 2.058L2.725 5.961a.332.332 0 0 0-.132.545l1.979 1.89 6.721-5.289ZM5.274 9.752v2.32l1.143-.84a.75.75 0 0 1 .975.075l2.095 2.095a.335.335 0 0 0 .31.09.332.332 0 0 0 .24-.216v-.001l3.284-9.855-8.047 6.332Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSend;
