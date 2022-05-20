import * as React from 'react';

const SvgPinBold = props => (
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
      d="M2.277 6.308a.845.845 0 0 1 .402-.203l4.79-.957 2.4-3.762a.845.845 0 0 1 1.302-.143l3.581 3.582a.845.845 0 0 1-.143 1.311l-3.76 2.392-.957 4.793a.845.845 0 0 1-1.426.431l-2.579-2.58L2.28 14.78a.75.75 0 0 1-1.06-1.06l3.607-3.608-2.58-2.58a.845.845 0 0 1 .03-1.224Z"
    />
  </svg>
);

export default SvgPinBold;
