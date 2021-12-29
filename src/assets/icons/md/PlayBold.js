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
      d="M8.373 2.495a2.791 2.791 0 0 0-2.88-.178c-.455.243-.833.6-1.096 1.034-.262.434-.4.93-.397 1.433v14.432a2.74 2.74 0 0 0 .397 1.433c.263.434.641.791 1.096 1.034a2.792 2.792 0 0 0 2.88-.178L18.8 14.289c.372-.262.674-.607.883-1.004a2.766 2.766 0 0 0 0-2.57 2.853 2.853 0 0 0-.883-1.004L8.373 2.495z"
    />
  </svg>
);

export default SvgPlayBold;
