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
      fillRule="evenodd"
      d="M8.828 2.001a7 7 0 0 1 6.61 4.252 5 5 0 0 1 5.893 7.246 1 1 0 0 1-1.733-.998 3 3 0 0 0-4.217-4.025 1 1 0 0 1-1.513-.615 5 5 0 1 0-8.595 4.472 1 1 0 1 1-1.49 1.334A7 7 0 0 1 8.828 2ZM11 15.414V21a1 1 0 1 0 2 0v-5.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a.997.997 0 0 0-.704-.293h-.006a.996.996 0 0 0-.697.286l-.008.008-3 2.999a1 1 0 1 0 1.415 1.414L11 15.414Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUploadCloud;
