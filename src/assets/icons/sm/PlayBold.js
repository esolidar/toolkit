import * as React from 'react';

const SvgPlayBold = props => (
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
      d="M13.73 6.86A2.5 2.5 0 0 0 13 6L6.79 1.45A2.39 2.39 0 0 0 5.56 1a2.52 2.52 0 0 0-1.29.29 2.44 2.44 0 0 0-.93.93A2.49 2.49 0 0 0 3 3.49v9a2.49 2.49 0 0 0 .34 1.27c.22.39.54.711.93.93A2.38 2.38 0 0 0 5.4 15h.16a2.49 2.49 0 0 0 1.23-.45L13 10c.314-.234.568-.539.74-.89a2.54 2.54 0 0 0 0-2.28l-.01.03Z"
    />
  </svg>
);

export default SvgPlayBold;
