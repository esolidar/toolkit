import classNames from 'classnames';
import React, { FC } from 'react';
import RcTooltip from 'rc-tooltip';
import Props from './Tooltip.types';

const Tooltip: FC<Props> = ({
  className = 'esolidar-tooltip',
  tooltipBodyChild,
  trigger,
  overlay,
  placement = 'right',
  displayNone,
}: Props): JSX.Element => {
  const classes = classNames('tooltip', displayNone && 'tooltip--displayNone', className);

  return (
    <>
      <RcTooltip
        overlayClassName={classes}
        placement={placement}
        trigger={trigger}
        overlay={overlay}
      >
        <span className="tooltipOverlay" data-testid="tooltipOverlay">
          {tooltipBodyChild}
        </span>
      </RcTooltip>
    </>
  );
};

export default Tooltip;
