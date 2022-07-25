import * as React from 'react';

const SvgLanguage = props => (
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
      d="M14 2h1a1 1 0 1 1 0 2h-.526L10.4 8.978l2.162 2.542a1 1 0 1 1-1.523 1.296l-1.927-2.264-3.339 4.081a1 1 0 0 1-1.548-1.266l3.57-4.363-1.818-2.136a1 1 0 0 1 1.524-1.296L9.083 7.43 11.89 4H3a1 1 0 0 1 0-2h11Zm2.5 9a1 1 0 0 1 .894.553l3.492 6.982a.981.981 0 0 1 .018.037l.99 1.98a1 1 0 1 1-1.788.895L19.382 20h-5.764l-.724 1.447a1 1 0 1 1-1.788-.894l.99-1.98a.832.832 0 0 1 .019-.038l3.49-6.982A1 1 0 0 1 16.5 11Zm-1.882 7h3.764L16.5 14.236 14.618 18Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgLanguage;
