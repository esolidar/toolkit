import * as React from 'react';

const SvgComment = props => (
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
      d="M4.387 2.003a7.014 7.014 0 0 1 6.742-.266 6.998 6.998 0 0 1 3.756 4.988 6.973 6.973 0 0 1-1.736 5.995 7.002 7.002 0 0 1-5.842 2.221 7.012 7.012 0 0 1-2.725-.853l-2.592.873a.75.75 0 0 1-.936-.988l.948-2.384a6.977 6.977 0 0 1 2.385-9.586Zm3.616.497a5.514 5.514 0 0 0-2.842.789 5.475 5.475 0 0 0-1.7 7.796.75.75 0 0 1 .077.7l-.492 1.237 1.383-.466a.75.75 0 0 1 .638.076 5.513 5.513 0 0 0 6.98-.929 5.483 5.483 0 0 0 1.363-4.706 5.48 5.48 0 0 0-2.951-3.917 5.514 5.514 0 0 0-2.456-.58Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgComment;
