import React, { FC } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import BootstrapPopover from 'react-bootstrap/Popover';

import Props from './Popover.types';

const Popover: FC<Props> = ({
  placement = 'top',
  trigger = ['hover', 'focus'],
  popoverHeaderChildren,
  popoverBodyChildren,
  triggerChildren,
}: Props): JSX.Element => {
  const popover = (
    <BootstrapPopover id="bootstrap-popover" data-testid="bootstrap-popover">
      {popoverHeaderChildren && (
        <header data-testid="bootstrap-popover-header">{popoverHeaderChildren}</header>
      )}
      <body data-testid="bootstrap-popover-body">{popoverBodyChildren}</body>
    </BootstrapPopover>
  );

  return (
    <div className="popover">
      <OverlayTrigger trigger={trigger} placement={placement} overlay={popover}>
        <span>{triggerChildren}</span>
      </OverlayTrigger>
    </div>
  );
};

export default Popover;
