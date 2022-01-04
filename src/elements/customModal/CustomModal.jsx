import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Icon from '../icon';

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
  showHeader,
  showBody,
  showFooter,
  size,
  style,
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  iconTitle,
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
      style={style}
    >
      {showHeader && (
        <Modal.Header
          className={headerClassName}
          closeLabel="Close"
          style={headerStyle}
          data-testid="header"
        >
          <Modal.Title>
            <span className={`custom-modal__title${titleClassName}`} data-testid="title">
              {iconTitle && (
                <img className="custom-modal__icon-title" src={iconTitle} alt={title} />
              )}
              {title}
            </span>
            <span className={`font-weight-normal ${subtitleClassName}`} data-testid="subtitle">
              {subtitle}
            </span>
            {closeButton && <Icon name="X" onClick={onHide} />}
          </Modal.Title>
        </Modal.Header>
      )}
      {showBody && (
        <Modal.Body className={bodyClassName} style={bodyStyle} data-testid="body">
          {bodyChildren}
        </Modal.Body>
      )}
      {showFooter && (
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
  showHeader: PropTypes.bool,
  showBody: PropTypes.bool,
  showFooter: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  style: PropTypes.object,
  subtitle: PropTypes.string,
  subtitleClassName: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  iconTitle: PropTypes.string,
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
  showHeader: true,
  showBody: true,
  showFooter: true,
  size: 'md',
  subtitle: '',
  subtitleClassName: '',
  titleClassName: '',
};

export default CustomModal;
