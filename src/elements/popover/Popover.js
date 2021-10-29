import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PopoverBootstrap from 'react-bootstrap/Popover';

const Popover = ({
  placement = 'auto',
  trigger = ['hover', 'focus'],
  delay,
  overlayTrigger,
  popoverHeaderChildren,
  popoverBodyChildren,
}) => {
  const popover = (
    <PopoverBootstrap id="bootstrap-popover">
      {popoverHeaderChildren && (
        <div className="bootstrap-popover-header" data-testid="bootstrap-popover-header">
          {popoverHeaderChildren}
        </div>
      )}
      <div className="bootstrap-popover-body" data-testid="bootstrap-popover-body">
        {popoverBodyChildren}
      </div>
    </PopoverBootstrap>
  );

  return (
    <OverlayTrigger trigger={trigger} placement={placement} overlay={popover} delay={delay}>
      <span className="popover-component-trigger">{overlayTrigger}</span>
    </OverlayTrigger>
  );
};

Popover.propTypes = {
  placement: PropTypes.string,
  trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.shape]),
  overlayTrigger: PropTypes.element,
  popoverHeaderChildren: PropTypes.element,
  popoverBodyChildren: PropTypes.element,
};

export default Popover;
