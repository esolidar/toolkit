import * as React from 'react';

const SvgChevronsDown = props => (
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
      d="M4.31 12.276a1 1 0 0 1 1.414.034L12 18.9l6.276-6.59a1 1 0 0 1 1.448 1.38l-6.45 6.771-.015.017a1.776 1.776 0 0 1-2.518 0l-.016-.017-6.45-6.771a1 1 0 0 1 .035-1.414zm-.053-8.945a1 1 0 0 1 1.412-.074L12 8.954l6.331-5.697a1 1 0 1 1 1.338 1.486l-6.45 5.804-.017.016c-.17.146-.365.256-.569.328a1.893 1.893 0 0 1-1.266 0 1.796 1.796 0 0 1-.57-.328l-.017-.016-6.449-5.804a1 1 0 0 1-.074-1.412z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgChevronsDown;
