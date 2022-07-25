import * as React from 'react';

const SvgHeart = props => (
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
      d="M5.828 5.884A3.562 3.562 0 0 0 4 9.02v.008a3.6 3.6 0 0 0 1.277 2.753c.02.016.038.033.056.05l6.663 6.547 6.672-6.547a.972.972 0 0 1 .055-.05A3.6 3.6 0 0 0 20 9.029V9.02a3.562 3.562 0 0 0-1.828-3.137 3.466 3.466 0 0 0-4.344 1.038.986.986 0 0 1-.051.064l-1.024 1.172a1 1 0 0 1-1.508-.002l-1.024-1.178a.996.996 0 0 1-.049-.061 3.466 3.466 0 0 0-4.344-1.033ZM22 9.03a5.6 5.6 0 0 1-1.957 4.254l-6.837 6.71a1.691 1.691 0 0 1-2.42-.001l-6.83-6.71A5.6 5.6 0 0 1 2 9.031 5.562 5.562 0 0 1 4.906 4.11a5.466 5.466 0 0 1 6.85 1.585l.246.284.243-.279a5.466 5.466 0 0 1 6.878-1.575A5.562 5.562 0 0 1 22 9.031Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgHeart;
