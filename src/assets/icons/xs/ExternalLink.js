import * as React from 'react';

const SvgExternalLink = props => (
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
      d="M1.496 1.496A1.694 1.694 0 0 1 2.694 1h2.362a.75.75 0 1 1 0 1.5H2.694a.194.194 0 0 0-.194.194v6.612a.194.194 0 0 0 .194.194h6.612a.194.194 0 0 0 .194-.194V6.944a.75.75 0 0 1 1.5 0v2.362A1.694 1.694 0 0 1 9.306 11H2.694A1.694 1.694 0 0 1 1 9.306V2.694c0-.449.179-.88.496-1.198Z"
    />
    <path
      fill={props.color}
      d="M7.889 2.5a.75.75 0 1 1 0-1.5h2.361a.747.747 0 0 1 .75.75v2.361a.75.75 0 0 1-1.5 0v-.55L6.53 6.53a.75.75 0 0 1-1.06-1.06L8.44 2.5h-.551Z"
    />
  </svg>
);

export default SvgExternalLink;
