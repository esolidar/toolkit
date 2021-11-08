import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './Container.types';

const WizardFooter: FC<Props> = ({
  children,
  rounded,
  shadow,
  background,
  borderSize = 0,
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

export default WizardFooter;
