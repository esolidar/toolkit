import * as React from 'react';

const SvgAlertTriangle = props => (
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
      d="M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm-1.06 10.56a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M10.549 2.398a2.845 2.845 0 0 1 3.945 1.078l7.008 12.567a4.018 4.018 0 0 1-3.523 5.959H6.017A4.019 4.019 0 0 1 2 18.047a4.02 4.02 0 0 1 .498-1.998l.002-.004 7.006-12.57a2.845 2.845 0 0 1 1.043-1.077ZM6.017 20H17.98a2.022 2.022 0 0 0 1.772-2.991l-.001-.002L12.74 4.439a.844.844 0 0 0-1.483 0l-.003.007L4.25 17.014l-.001.002a2.015 2.015 0 0 0 1.768 2.986Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgAlertTriangle;
