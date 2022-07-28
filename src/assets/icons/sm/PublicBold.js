import * as React from 'react';

const SvgPublicBold = props => (
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
      d="M3.05 3.05a7 7 0 0 1 11.94 4.585.763.763 0 0 1 .008.18L15 8a7 7 0 1 1-13.997-.196.757.757 0 0 1 .008-.192A7 7 0 0 1 3.05 3.05Zm6.375 10.262a5.5 5.5 0 0 0 4.052-4.808L10.73 8.5c-.12 1.7-.566 3.345-1.305 4.812ZM10.655 7l2.754.004A5.5 5.5 0 0 0 9.275 2.65 12.547 12.547 0 0 1 10.655 7Zm-3.93-4.35a5.5 5.5 0 0 0-4.132 4.34l2.752.004c.198-1.54.667-3.02 1.38-4.344Zm.134 4.346A11.035 11.035 0 0 1 8 3.447c.57 1.081.958 2.287 1.141 3.551L6.86 6.996Zm-.085 1.5 2.452.002A11.145 11.145 0 0 1 8 12.803a11.146 11.146 0 0 1-1.226-4.308ZM5.27 8.493a12.693 12.693 0 0 0 1.305 4.818A5.5 5.5 0 0 1 2.522 8.49l2.748.004Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPublicBold;
