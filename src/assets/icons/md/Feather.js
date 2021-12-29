import * as React from 'react';

const SvgFeather = props => (
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
      d="M21 2c-.38 0-9.46 0-13.68 4.27a9.49 9.49 0 0 0-2.05 11.05l-3 3a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3a9.54 9.54 0 0 0 4.12 1 9.8 9.8 0 0 0 1.33-.1 9.5 9.5 0 0 0 5.56-2.87C22 12.46 22 3.38 22 3a1 1 0 0 0-1-1zm-4.73 13.32a7.47 7.47 0 0 1-8.06 1.88l6.5-6.49a1.004 1.004 0 1 0-1.42-1.42l-6.49 6.5a7.46 7.46 0 0 1 1.91-8.08C11.6 4.81 17.56 4.18 20 4c-.18 2.44-.82 8.4-3.73 11.32z"
    />
  </svg>
);

export default SvgFeather;
