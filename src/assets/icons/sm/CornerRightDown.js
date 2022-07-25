import * as React from 'react';

const SvgCornerRightDown = props => (
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
      d="M2 1.75A.75.75 0 0 1 2.75 1H4.5c1.183 0 2.343.282 3.28 1.22.475.475.837 1.127 1.079 1.776.244.653.391 1.368.391 2.004v6.524l2.488-2.322a.75.75 0 1 1 1.024 1.096l-3.75 3.5a.75.75 0 0 1-1.024 0l-3.75-3.5a.75.75 0 1 1 1.024-1.096l2.488 2.322V6c0-.425-.103-.96-.296-1.48-.196-.522-.46-.965-.734-1.24-.563-.563-1.28-.78-2.22-.78H2.75A.75.75 0 0 1 2 1.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgCornerRightDown;
