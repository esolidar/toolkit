import * as React from 'react';

const SvgWhatsapp = props => (
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
      d="M16.522 13.663c-.243-.114-1.38-.683-1.592-.764-.229-.065-.374-.114-.536.13-.147.229-.601.748-.732.894-.146.162-.276.178-.504.065-.244-.114-.99-.358-1.885-1.154a6.884 6.884 0 0 1-1.3-1.593c-.13-.243-.017-.357.097-.487a3 3 0 0 0 .358-.407.41.41 0 0 0 .08-.097c.066-.097.099-.178.148-.276a.4.4 0 0 0-.016-.407c-.051-.114-.52-1.268-.716-1.723-.195-.471-.39-.39-.52-.39-.146 0-.292-.016-.455-.016a.8.8 0 0 0-.618.293c-.228.228-.829.78-.829 1.934.002.265.047.528.131.78.227.829.747 1.495.828 1.609.114.162 1.61 2.568 3.982 3.494 2.388.926 2.388.618 2.812.584.423-.033 1.381-.552 1.576-1.105.195-.536.195-1.007.13-1.105-.048-.081-.21-.145-.439-.26z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M7.35 4.289A9.007 9.007 0 0 1 12 2.995a9.01 9.01 0 0 1 8.852 7.38 9.005 9.005 0 0 1-13.236 9.498l-3.302 1.115a1 1 0 0 1-1.25-1.316l1.208-3.044A9.007 9.007 0 0 1 7.35 4.288zm4.65.706a7.006 7.006 0 0 0-5.784 10.962 1 1 0 0 1 .104.933l-.6 1.512 1.69-.57a1 1 0 0 1 .853.1A7.007 7.007 0 1 0 12 4.996z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgWhatsapp;