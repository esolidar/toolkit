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
      fill="#6C7679"
      fillRule="evenodd"
      d="M20.031 2.069a2.556 2.556 0 0 0-1.395.062L3.748 7.093l-.005.002a2.558 2.558 0 0 0-.985 4.233l.015.015L6 14.428V20a1 1 0 0 0 1.592.806l2.672-1.965 2.409 2.41a2.558 2.558 0 0 0 4.232-.986l4.964-14.901a2.556 2.556 0 0 0-1.838-3.295Zm-2.877 2.665L4.385 8.989h-.002a.558.558 0 0 0-.218.917l2.898 2.771 10.09-7.943ZM8 14.485v3.538l1.772-1.303a1 1 0 0 1 1.3.1l3.015 3.017a.56.56 0 0 0 .923-.212l.001-.002 4.812-14.446L8 14.485Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSend;
