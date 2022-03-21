import classNames from 'classnames';
import React, { FC } from 'react';
import RcTooltip from 'rc-tooltip';
import Props from './Tooltip.types';

const Tooltip: FC<Props> = ({
  className = 'esolidar-tooltip',
  bodyChildClassName,
  tooltipBodyChild,
  trigger,
  overlay,
  placement = 'right',
  displayNone,
  type = 'default',
  styleOverlay,
}: Props): JSX.Element => {
  const classes = classNames(
    'tooltip',
    displayNone && 'tooltip--displayNone',
    type && `tooltip--${type}`,
    className
  );
  const bodyChildClasses = classNames('tooltipOverlay', bodyChildClassName);

  return (
    <>
      <RcTooltip
        overlayClassName={classes}
        placement={placement}
        trigger={trigger}
        overlay={overlay}
      >
        <span className={bodyChildClasses} data-testid="tooltipOverlay" style={styleOverlay}>
          {tooltipBodyChild}
        </span>
      </RcTooltip>
    </>
  );
};

export default Tooltip;
