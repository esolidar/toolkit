import * as React from 'react';

const SvgEmail = props => (
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
      d="M1.002 2.692A.747.747 0 0 1 1.75 2h12.5a.749.749 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75c0-.02 0-.039.002-.058ZM2.5 4.382V12.5h11V4.382l-4.09 3.51A1.985 1.985 0 0 1 8 8.5a1.985 1.985 0 0 1-1.41-.608L2.5 4.382Zm9.724-.882H3.776l3.817 3.275a.748.748 0 0 1 .053.051A.495.495 0 0 0 8 7c.1 0 .228-.043.354-.174a.748.748 0 0 1 .053-.05L12.224 3.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgEmail;
