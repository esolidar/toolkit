import * as React from 'react';

const SvgVolumeBold = props => (
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
      d="M8 7H4.857a2.82 2.82 0 0 0-2.02.86A2.973 2.973 0 0 0 2 9.932v4.134c0 .778.301 1.524.837 2.074a2.82 2.82 0 0 0 2.02.859H8V7Zm2 10.67 8.026 4.032a2.683 2.683 0 0 0 2.675-.124c.398-.254.726-.608.953-1.028.227-.421.346-.895.344-1.376L22 4.815c0-.48-.119-.953-.347-1.372a2.785 2.785 0 0 0-.954-1.025 2.683 2.683 0 0 0-2.67-.122L10 6.33v11.34Z"
    />
  </svg>
);

export default SvgVolumeBold;
