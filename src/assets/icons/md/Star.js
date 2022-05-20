import * as React from 'react';

const SvgStar = props => (
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
      d="M7.52 20.99h-.16a2.439 2.439 0 0 1-1.29-.47 2.53 2.53 0 0 1-.84-1.07 2.47 2.47 0 0 1-.12-1.37l.74-3.64-2.26-2.61a2.46 2.46 0 0 1-.43-2.46 2.45 2.45 0 0 1 2-1.54L7.8 7.5l2.12-3.37c.225-.345.53-.63.89-.83a2.51 2.51 0 0 1 2.35 0c.363.2.671.485.9.83l2.14 3.38 2.65.33c.434.05.846.22 1.19.49.344.258.613.603.78 1a2.311 2.311 0 0 1-.37 2.49l-2.27 2.62.74 3.64c.09.459.049.934-.12 1.37a2.39 2.39 0 0 1-.84 1.07 2.48 2.48 0 0 1-2.62.17L12 18.88l-3.3 1.81a2.46 2.46 0 0 1-1.18.3ZM11.61 5.2 9.22 8.99a1 1 0 0 1-.72.46l-3.11.39a.43.43 0 0 0-.22.09.38.38 0 0 0-.14.19.32.32 0 0 0 0 .22.4.4 0 0 0 .09.2l2.58 3a1 1 0 0 1 .23.85l-.84 4.12a.45.45 0 0 0 0 .23.47.47 0 0 0 .15.19c.075.049.16.08.25.09a.37.37 0 0 0 .25-.06l3.78-2.07a1 1 0 0 1 1 0l3.78 2.07a.509.509 0 0 0 .25.06.54.54 0 0 0 .24-.09.33.33 0 0 0 .14-.19.37.37 0 0 0 0-.23l-.84-4.12a.999.999 0 0 1 .23-.85l2.59-3a.539.539 0 0 0 .1-.2.41.41 0 0 0 0-.22.38.38 0 0 0-.14-.19.43.43 0 0 0-.22-.09l-3.12-.38a1 1 0 0 1-.76-.47L12.38 5.2a.47.47 0 0 0-.77 0Z"
    />
  </svg>
);

export default SvgStar;
