import * as React from 'react';

const SvgFilm = props => (
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
      d="M10.822 10.211A1.545 1.545 0 0 0 8.5 11.568v5.864a1.546 1.546 0 0 0 2.322 1.357l4.922-2.95.01-.005a1.566 1.566 0 0 0 0-2.668l-4.92-2.948-.012-.007ZM14.09 14.5l-3.59 2.15v-4.3l3.589 2.15Z"
      clipRule="evenodd"
    />
    <path
      fill="#6C7679"
      fillRule="evenodd"
      d="M3 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm11.523 2h-3.846l-1.2 3h3.846l1.2-3ZM20 9v11H4V9h16Zm-4.523-2 1.2-3H20v3h-4.523ZM4 7h3.323l1.2-3H4v3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFilm;
