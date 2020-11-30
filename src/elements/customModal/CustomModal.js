import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const CustomModal = ({
  actionsChildren,
  backdrop,
  centered,
  bodyChildren,
  bodyClassName,
  bodyPadding,
  dialogClassName,
  disableEscapeKeyDown,
  dividerBottom,
  dividerTop,
  footerClassName,
  headerClassName,
  onHide,
  scrollable,
  show,
  size,
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
}) => {
  const border = '1px solid #dee2e6';

  const headerStyle = {
    borderBottom: dividerTop ? border : 'none',
  };

  const bodyStyle = {
    padding: bodyPadding || 'auto',
  };

  const footerStyle = {
    borderTop: dividerBottom ? border : 'none',
  };

  return (
    <Modal
      backdrop={backdrop}
      centered={centered}
      dialogClassName={dialogClassName}
      disableEscapeKeyDown={disableEscapeKeyDown}
      onHide={onHide}
      scrollable={scrollable}
      show={show}
      size={size}
      data-testid="modal"
    >
      <Modal.Header
        className={headerClassName}
        closeButton={true}
        closeLabel="Close"
        onHide={onHide}
        style={headerStyle}
        data-testid="header"
      >
        <Modal.Title>
          <span
            className={`mr-2 ${titleClassName}`}
            data-testid="title"
          >
            {title}
          </span>
          <span
            className={`font-weight-normal ${subtitleClassName}`}
            data-testid="subtitle"
          >
            {subtitle}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={bodyClassName}
        style={bodyStyle}
        data-testid="body"
      >
        {bodyChildren}
      </Modal.Body>
      {actionsChildren && (
        <Modal.Footer
          className={footerClassName}
          style={footerStyle}
          data-testid="footer"
        >
          {actionsChildren}
        </Modal.Footer>
      )}
    </Modal>
  );
};

CustomModal.propTypes = {
  actionsChildren: PropTypes.node,
  backdrop: PropTypes.oneOf(['static', true, false]),
  centered: PropTypes.bool,
  bodyChildren: PropTypes.node.isRequired,
  bodyClassName: PropTypes.string,
  bodyPadding: PropTypes.string,
  dialogClassName: PropTypes.string,
  disableEscapeKeyDown: PropTypes.bool,
  dividerBottom: PropTypes.bool,
  dividerTop: PropTypes.bool,
  footerClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  onHide: PropTypes.func,
  scrollable: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  subtitle: PropTypes.string,
  subtitleClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
};

CustomModal.defaultProps = {
  backdrop: 'static',
  centered: false,
  bodyClassName: '',
  dialogClassName: '',
  disableEscapeKeyDown: false,
  dividerBottom: false,
  dividerTop: false,
  footerClassName: '',
  headerClassName: '',
  scrollable: true,
  size: 'md',
  subtitle: '',
  subtitleClassName: '',
  titleClassName: '',
};

export default CustomModal;
