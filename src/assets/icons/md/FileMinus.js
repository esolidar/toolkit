import * as React from 'react';

const SvgFileMinus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox={props.viewBox}
    {...props}
  >
    <path fill={props.color} d="M10 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4.796 2.83A2.726 2.726 0 0 1 6.75 2H13a1 1 0 0 1 .707.293l6 6A.997.997 0 0 1 20 9v10.2c0 .734-.283 1.443-.796 1.97a2.725 2.725 0 0 1-1.954.83H6.75a2.726 2.726 0 0 1-1.954-.83A2.826 2.826 0 0 1 4 19.2V4.8c0-.734.283-1.443.796-1.97zM6.75 4H12v5a1 1 0 0 0 1 1h5v9.2a.827.827 0 0 1-.23.576.725.725 0 0 1-.52.224H6.75a.726.726 0 0 1-.52-.224A.826.826 0 0 1 6 19.2V4.8c0-.221.086-.428.23-.576A.726.726 0 0 1 6.75 4zM14 5.414 16.586 8H14V5.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFileMinus;
