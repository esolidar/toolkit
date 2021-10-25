import React, { FC } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PopoverBootstrap from 'react-bootstrap/Popover';

import Props from './Popover.types';

const Popover: FC<Props> = ({
  placement = 'top-start',
  trigger = ['hover', 'focus'],
  children,
  popoverHeaderChildren,
  popoverBodyChildren,
}: Props): JSX.Element => {
  const popover = (
    <PopoverBootstrap id="bootstrap-popover">
      {popoverHeaderChildren && (
        <header data-testid="bootstrap-popover-header">{popoverHeaderChildren}</header>
      )}
      <body data-testid="bootstrap-popover-body">{popoverBodyChildren}</body>
    </PopoverBootstrap>
  );

  return (
    <OverlayTrigger trigger={trigger} placement={placement} overlay={popover}>
      <span className="popover-component-trigger">{children}</span>
    </OverlayTrigger>
  );
};

export default Popover;
