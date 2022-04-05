/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React, { FC } from 'react';
import Props from './Icon.types';

const EmptyIcon = () => <div />;

const sizes = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 40,
};

const Icon: FC<Props> = ({
  name,
  size = 'md',
  color = '#6C7679',
  className = '',
  dataTestId,
  style,
  ...props
}: Props) => {
  let Icon = null;

  try {
    Icon = require(`../../assets/icons/${size}/${name}`).default;
  } catch (error) {
    Icon = EmptyIcon;
  }

  return (
    <Icon
      color={color}
      width={sizes[size]}
      height={sizes[size]}
      viewBox={`0 0 ${sizes[size]} ${sizes[size]}`}
      className={`icon-component ${className}`}
      data-testid={dataTestId}
      style={{
        ...style,
        minWidth: sizes[size],
      }}
      {...props}
    />
  );
};

export default Icon;
