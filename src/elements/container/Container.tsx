import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './Container.types';

const Container: FC<Props> = ({
  children,
  rounded = true,
  shadow = true,
  background = false,
  borderSize = 1,
}: Props): JSX.Element => {
  const classes = classnames(
    'esolidar-container',
    {
      'container-rounded': rounded,
    },
    {
      'container-shadow': shadow,
    },
    {
      'container-background': background,
    },
    {
      'container-border': borderSize,
    }
  );

  return (
    <div className={classes} style={{ borderWidth: `${borderSize}px` }}>
      {children}
    </div>
  );
};

export default Container;
