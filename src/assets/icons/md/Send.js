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
      d="M20.031 2.069a2.556 2.556 0 0 0-1.395.062L3.748 7.093l-.005.002a2.558 2.558 0 0 0-.985 4.233l.015.015L6 14.428V20a1 1 0 0 0 1.593.806l2.671-1.965 2.409 2.41a2.558 2.558 0 0 0 4.232-.986L21.87 5.364a2.556 2.556 0 0 0-1.838-3.295zm-2.877 2.665L4.386 8.989h-.002a.558.558 0 0 0-.22.917l2.9 2.771 10.09-7.943zM8 14.485v3.538l1.772-1.303a1 1 0 0 1 1.3.1l3.016 3.017a.56.56 0 0 0 .923-.212v-.002l4.812-14.446L8 14.485z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSend;
