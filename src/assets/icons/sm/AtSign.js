import * as React from 'react';

const SvgAtSign = props => (
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
      d="M9.836 1.508a6.73 6.73 0 0 0-7.575 2.935 6.758 6.758 0 0 0 .743 8.099 6.737 6.737 0 0 0 7.982 1.505.75.75 0 0 0-.668-1.344 5.23 5.23 0 0 1-6.204-1.17A5.255 5.255 0 0 1 6.1 3.103a5.23 5.23 0 0 1 6.072 1.733 5.257 5.257 0 0 1 1.059 3.163c0 .033.002.065.006.098a1.628 1.628 0 0 1-1.069 1.745.579.579 0 0 1-.522-.079 8.303 8.303 0 0 0-.11-.077l-.044-.03a2.83 2.83 0 0 1-.126-.093.833.833 0 0 1-.063-.053l-.007-.013a3.343 3.343 0 0 1-.114-.236.738.738 0 0 1-.031-.086V7.993a3.15 3.15 0 1 0-1.078 2.38c.123.172.274.297.367.37a6.257 6.257 0 0 0 .332.239 2.079 2.079 0 0 0 1.882.279l.006-.002a3.122 3.122 0 0 0 2.07-3.307 6.757 6.757 0 0 0-1.36-4.02 6.74 6.74 0 0 0-3.533-2.424zm-2.753 5.12a1.65 1.65 0 1 1 1.834 2.744 1.65 1.65 0 0 1-1.834-2.744z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAtSign;