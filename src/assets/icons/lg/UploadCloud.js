import * as React from 'react';

const SvgUploadCloud = props => (
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
      d="M19.591 4.769a11 11 0 0 0-12.79 17.33 1 1 0 1 0 1.49-1.334 9 9 0 1 1 15.471-8.049 1 1 0 0 0 1.513.615 5.667 5.667 0 0 1 7.964 7.602 1 1 0 1 0 1.733.998 7.667 7.667 0 0 0-9.623-10.89 11 11 0 0 0-5.758-6.272z"
    />
    <path
      fill={props.color}
      d="M19.293 21.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L21 24.414V35a1 1 0 1 1-2 0V24.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l4-4z"
    />
  </svg>
);

export default SvgUploadCloud;
