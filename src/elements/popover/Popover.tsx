import React, { FC } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import Props from './Popover.types';

const PopoverC: FC<Props> = ({
  placement = 'top',
  trigger = ['hover', 'focus'],
  popoverHeaderChildren,
  popoverBodyChildren,
  triggerChildren,
}: Props): JSX.Element => {
  const popover = (
    <Popover id="popoverComponent" data-testid="popoverComponent">
      {popoverHeaderChildren && (
        <header data-testid="popoverComponent-header">{popoverHeaderChildren}</header>
      )}
      <body data-testid="popoverComponent-body">{popoverBodyChildren}</body>
    </Popover>
  );

  return (
    <div className="popoverOverlayTrigger">
      <OverlayTrigger trigger={trigger} placement={placement} overlay={popover}>
        <span>{triggerChildren}</span>
      </OverlayTrigger>
    </div>
  );
};

export default PopoverC;
