import * as React from 'react';

const SvgSecurity = props => (
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
      d="M12.003 2a1 1 0 0 1 .794.396 8 8 0 0 0 7.555 3.077 1 1 0 0 1 1.148.989v3.849a12.036 12.036 0 0 1-7.844 11.226l-.833.315c-.53.2-1.115.2-1.645 0l-.834-.315h-.002A12.036 12.036 0 0 1 2.5 10.31V6.462a1 1 0 0 1 1.141-.99 8.102 8.102 0 0 0 7.566-3.082 1 1 0 0 1 .796-.39zm1.305 18.6-.348-.937a10.036 10.036 0 0 0 6.54-9.36V7.556a10 10 0 0 1-7.505-3.029A10.102 10.102 0 0 1 4.5 7.55v2.755a10.036 10.036 0 0 0 6.54 9.359l.005.001.837.316c.076.029.16.029.236 0l.837-.316.353.936z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSecurity;
