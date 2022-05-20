import * as React from 'react';

const SvgUploadCloud = props => (
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
      d="M5.633 1.252a4.589 4.589 0 0 1 2.114.456 4.79 4.79 0 0 1 1.694 1.375c.267.343.487.72.656 1.12.423-.132.87-.179 1.319-.134a3.362 3.362 0 0 1 2.04.978 3.6 3.6 0 0 1 1.01 2.054 3.667 3.667 0 0 1-.415 2.26.75.75 0 1 1-1.315-.722c.22-.4.307-.87.244-1.334a2.1 2.1 0 0 0-.586-1.198 1.818 1.818 0 0 0-2.33-.24.75.75 0 0 1-1.15-.46 3.537 3.537 0 0 0-.657-1.403 3.282 3.282 0 0 0-1.162-.945 3.089 3.089 0 0 0-2.831.073 3.31 3.31 0 0 0-1.119 1.005 3.56 3.56 0 0 0-.591 1.437c-.09.522-.067 1.06.07 1.57s.383.979.716 1.37a.75.75 0 0 1-1.142.973 5.015 5.015 0 0 1-1.022-1.954 5.152 5.152 0 0 1-.1-2.216 5.059 5.059 0 0 1 .842-2.043 4.81 4.81 0 0 1 1.626-1.458 4.601 4.601 0 0 1 2.09-.564Z"
    />
    <path
      fill="#6C7679"
      d="M7 10.81V14a.75.75 0 0 0 1.5 0v-3.19l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.748.748 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72Z"
    />
  </svg>
);

export default SvgUploadCloud;
