import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PopoverBootstrap from 'react-bootstrap/Popover';

const Popover = ({
  placement = 'auto',
  trigger = ['hover', 'focus'],
  children,
  popoverHeaderChildren,
  popoverBodyChildren,
}) => {
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

Popover.propTypes = {
  placement: PropTypes.string,
  trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.element,
  popoverHeaderChildren: PropTypes.element,
  popoverBodyChildren: PropTypes.element,
};

export default Popover;
