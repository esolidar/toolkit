import * as React from 'react';

const SvgLoader = props => (
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
      d="M12 2a1 1 0 0 1 1 1v3.676a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM3.773 6.006a1 1 0 0 1 1.413-.073L7.944 8.42a1 1 0 1 1-1.34 1.486L3.846 7.419a1 1 0 0 1-.073-1.412Zm3.217 8.371a1 1 0 1 0-.688-1.878l-3.626 1.328a1 1 0 1 0 .688 1.878l3.626-1.328Zm3.215 2.439a1 1 0 0 1 .441 1.343l-1.664 3.292a1 1 0 1 1-1.784-.902l1.664-3.292a1 1 0 0 1 1.343-.442Zm9.949-9.397a1 1 0 0 0-1.34-1.486L16.056 8.42a1 1 0 0 0 1.34 1.486l2.758-2.486Zm-3.739 5.675a1 1 0 0 1 1.283-.595l3.626 1.328a1 1 0 1 1-.688 1.878l-3.626-1.328a1 1 0 0 1-.595-1.283Zm-1.276 4.163a1 1 0 0 0-1.785.902l1.664 3.292a1 1 0 0 0 1.784-.902l-1.663-3.292Z"
    />
  </svg>
);

export default SvgLoader;
