import * as React from 'react';

const SvgMyProjects = props => (
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
      d="M10 2a3 3 0 0 0-3 3v1H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H4V8h16v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-4V5a3 3 0 0 0-3-3h-4zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M14 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-.765 2.152a2 2 0 1 1 1.53 3.697 2 2 0 0 1-1.53-3.697z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M14 20c-.885 0-1.746.163-2.496.463-.751.3-1.343.719-1.744 1.187a1 1 0 1 1-1.52-1.3c.645-.753 1.522-1.344 2.521-1.744A8.774 8.774 0 0 1 14 18a8.77 8.77 0 0 1 3.239.606c1 .4 1.876.99 2.52 1.744a1 1 0 0 1-1.519 1.3c-.4-.468-.993-.887-1.744-1.187-.75-.3-1.61-.463-2.496-.463z"
    />
  </svg>
);

export default SvgMyProjects;
