import * as React from 'react';

const SvgFeed = props => (
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
      d="M13.35 1.063A1.25 1.25 0 0 1 15 2.247v9.423a1.25 1.25 0 0 1-1.65 1.184l-3.24-1.093a3.995 3.995 0 0 1-7.721-1.517c0-.352.046-.702.136-1.041L2.19 9.09A1.75 1.75 0 0 1 1 7.432v-.935c0-.75.478-1.417 1.189-1.657l11.16-3.777ZM10 3.78 2.67 6.26a.25.25 0 0 0-.17.237v.935a.25.25 0 0 0 .17.237L10 10.14V3.78Zm1.5-.508v7.375l2 .675V2.595l-2 .676ZM3.951 9.684l4.736 1.597A2.494 2.494 0 0 1 3.89 10.27v-.019c0-.19.02-.38.062-.566Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgFeed;
