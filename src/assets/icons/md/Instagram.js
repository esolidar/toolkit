import * as React from 'react';

const SvgInstagram = props => (
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
      d="M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
      clipRule="evenodd"
    />
    <path fill={props.color} d="M15.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M11.957 4h.086c1.189 0 2.142 0 2.912.063.791.065 1.478.2 2.11.523a5.375 5.375 0 0 1 2.35 2.349c.321.632.457 1.319.522 2.11.063.77.063 1.723.063 2.912v.086c0 1.189 0 2.142-.063 2.912-.065.791-.2 1.478-.523 2.11a5.376 5.376 0 0 1-2.349 2.35c-.632.321-1.319.457-2.11.522-.77.063-1.723.063-2.912.063h-.086c-1.189 0-2.142 0-2.912-.063-.791-.065-1.478-.2-2.11-.523a5.375 5.375 0 0 1-2.35-2.349c-.321-.632-.457-1.319-.522-2.11C4 14.185 4 13.232 4 12.043v-.086c0-1.189 0-2.142.063-2.912.065-.791.2-1.478.523-2.11a5.375 5.375 0 0 1 2.349-2.35c.632-.321 1.319-.457 2.11-.522C9.815 4 10.768 4 11.957 4Zm-2.75 2.056c-.667.055-1.06.157-1.364.312a3.375 3.375 0 0 0-1.475 1.475c-.155.303-.257.697-.312 1.365C6.001 9.888 6 10.758 6 12c0 1.242 0 2.113.056 2.792.055.668.157 1.062.312 1.365a3.37 3.37 0 0 0 1.475 1.475c.303.155.697.257 1.365.312.68.055 1.55.056 2.792.056 1.242 0 2.113 0 2.792-.056.668-.055 1.062-.157 1.365-.312a3.374 3.374 0 0 0 1.475-1.475c.155-.303.257-.697.312-1.365.055-.68.056-1.55.056-2.792 0-1.242 0-2.113-.056-2.792-.055-.668-.157-1.062-.312-1.365a3.374 3.374 0 0 0-1.475-1.475c-.303-.155-.697-.257-1.365-.312C14.112 6.001 13.242 6 12 6c-1.242 0-2.113 0-2.792.056Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgInstagram;
