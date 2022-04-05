import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Icon from '../icon';
import Button from '../button';

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
  const [modalDividerBottom, setModalDividerBottom] = useState(false);
  const [modalDividerTop, setModalDividerTop] = useState(false);
  const [modalBody, setModalBody] = useState(
    typeof window !== 'undefined' && document.querySelector('.modal-body')
  );

  const border = '1px solid #dee2e6';
  const headerStyle = {
    borderBottom: dividerTop || modalDividerTop ? border : 'none',
    padding: headerPadding || 'auto',
  };
  const bodyStyle = {
    padding: bodyPadding || 'auto',
  };
  const footerStyle = {
    borderTop: dividerBottom || modalDividerBottom ? border : 'none',
    padding: footerPadding || 'auto',
  };

  useEffect(() => {
    if (show && scrollable) {
      const timer = setTimeout(() => {
        setModalBody(document.querySelector('.modal-body'));
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  useEffect(() => {
    if (modalBody && scrollable) {
      if (modalBody.scrollHeight > modalBody.clientHeight) {
        setModalDividerBottom(true);
      }
      modalBody.addEventListener('scroll', () => {
        if (modalBody.scrollTop > 0) {
          setModalDividerTop(true);
        } else {
          setModalDividerTop(false);
        }
        if (
          Math.round(modalBody.scrollTop + modalBody.clientHeight) >=
          modalBody.scrollHeight - 1
        ) {
          setModalDividerBottom(false);
        } else {
          setModalDividerBottom(true);
        }
      });
      return () => {
        modalBody.removeEventListener('scroll', () => {
          setModalDividerTop(false);
          setModalDividerBottom(false);
        });
      };
    }
  }, [modalBody]);

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
                <img className="custom-modal__title-icon" src={iconTitle} alt={title} />
              )}
              {title}
              {subtitle && (
                <span className={`font-weight-normal ${subtitleClassName}`} data-testid="subtitle">
                  {subtitle}
                </span>
              )}
            </span>
            {closeButton && (
              <Button
                type="icon"
                extraClass="primary-full"
                icon={<Icon name="X" size="sm" />}
                onClick={onHide}
                ghost
              />
            )}
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
  bodyChildren: PropTypes.node,
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
  title: PropTypes.string.isRequired,
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
