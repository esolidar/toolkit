import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import variables from '../../assets/sass/_export.module.scss';

const CustomModal = ({
  actionsChildren,
  backdrop,
  bodyChildren,
  bodyClassName,
  bodyPadding,
  centered,
  closeButton,
  dialogClassName,
  dividerBottom,
  dividerTop,
  footerClassName,
  footerPadding,
  headerClassName,
  headerPadding,
  onHide,
  scrollable,
  show,
  size,
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  titleColor,
}) => {
  const border = '1px solid #dee2e6';

  const headerStyle = {
    borderBottom: dividerTop ? border : 'none',
    padding: headerPadding || 'auto',
  };

  const bodyStyle = {
    padding: bodyPadding || 'auto',
  };

  const footerStyle = {
    borderTop: dividerBottom ? border : 'none',
    padding: footerPadding || 'auto',
  };

  return (
    <Modal
      backdrop={backdrop}
      centered={centered}
      dialogClassName={`custom-modal ${dialogClassName}`}
      onHide={onHide}
      scrollable={scrollable}
      show={show}
      size={size}
      data-testid="modal"
    >
      <Modal.Header
        className={headerClassName}
        closeButton={closeButton}
        closeLabel="Close"
        onHide={onHide}
        style={headerStyle}
        data-testid="header"
      >
        <Modal.Title>
          <span
            className={`mr-2 ${titleClassName}`}
            data-testid="title"
            style={{ color: titleColor }}
          >
            {title}
          </span>
          <span className={`font-weight-normal ${subtitleClassName}`} data-testid="subtitle">
            {subtitle}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={bodyClassName} style={bodyStyle} data-testid="body">
        {bodyChildren}
      </Modal.Body>
      {actionsChildren && (
        <Modal.Footer className={footerClassName} style={footerStyle} data-testid="footer">
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
  closeButton: PropTypes.bool,
  dialogClassName: PropTypes.string,
  dividerBottom: PropTypes.bool,
  dividerTop: PropTypes.bool,
  footerClassName: PropTypes.string,
  footerPadding: PropTypes.string,
  headerClassName: PropTypes.string,
  headerPadding: PropTypes.string,
  onHide: PropTypes.func,
  scrollable: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  subtitle: PropTypes.string,
  subtitleClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  titleColor: PropTypes.string,
};

CustomModal.defaultProps = {
  backdrop: 'static',
  bodyClassName: '',
  centered: true,
  closeButton: true,
  dialogClassName: '',
  dividerBottom: false,
  dividerTop: false,
  footerClassName: '',
  headerClassName: '',
  scrollable: true,
  size: 'md',
  subtitle: '',
  subtitleClassName: '',
  titleClassName: '',
  titleColor: variables['theme-colors-primary'],
};

export default CustomModal;
