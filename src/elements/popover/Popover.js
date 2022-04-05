import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PopoverBootstrap from 'react-bootstrap/Popover';

const Popover = ({
  placement = 'auto',
  trigger = ['hover', 'focus'],
  delay,
  overlayTrigger,
  popoverHeaderChildren,
  popoverBodyChildren,
  className,
  size = 'sm',
}) => {
  const [isShow, setShow] = useState(undefined);
  const popover = (
    <PopoverBootstrap
      className={classnames('esolidar-popover', `size-${size}`)}
      id="bootstrap-popover"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(undefined)}
    >
      {popoverHeaderChildren && (
        <div className="bootstrap-popover-header" data-testid="bootstrap-popover-header">
          {popoverHeaderChildren}
        </div>
      )}
      <div
        className={classnames('bootstrap-popover-body', className)}
        data-testid="bootstrap-popover-body"
      >
        {popoverBodyChildren}
      </div>
    </PopoverBootstrap>
  );
  return (
    <OverlayTrigger
      trigger={trigger}
      placement={placement}
      overlay={popover}
      delay={delay}
      show={isShow}
    >
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
  className: PropTypes.string,
  size: PropTypes.string,
};
export default Popover;
