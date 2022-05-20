import * as React from 'react';

const SvgFileText = props => (
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
      d="M8 17a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M6.75 2c-.739 0-1.441.302-1.954.83A2.826 2.826 0 0 0 4 4.8v14.4c0 .734.283 1.443.796 1.97.513.528 1.215.83 1.954.83h10.5c.739 0 1.441-.302 1.954-.83A2.826 2.826 0 0 0 20 19.2V9a.997.997 0 0 0-.293-.707l-6-6A1.002 1.002 0 0 0 13 2H6.75ZM12 4H6.75a.726.726 0 0 0-.52.224A.826.826 0 0 0 6 4.8v14.4c0 .221.086.428.23.576.143.147.33.224.52.224h10.5c.19 0 .378-.077.52-.224A.827.827 0 0 0 18 19.2V10h-5a1 1 0 0 1-1-1V4Zm4.586 4L14 5.414V8h2.586Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFileText;
