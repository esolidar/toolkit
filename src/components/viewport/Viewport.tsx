import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './Viewport.types';

const Container: FC<Props> = ({
  children,
  size = 'xl',
  centred = true,
  className,
}: Props): JSX.Element => {
  const classes = classnames(
    'esolidar-viewport',
    { [`size-${size}`]: size },
    { centred },
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Container;
