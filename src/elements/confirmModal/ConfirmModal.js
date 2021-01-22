import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button as BootstrapButton } from 'react-bootstrap';
import Button from '../../components/button/Button';

const ConfirmModal = (props) => {
  const [isOpened, setIsOpened] = useState(props.visible);

  const onButtonClick = () => {
    // Since the modal is inside the button click events will propagate up.
    if (!isOpened) {
      setIsOpened(true);
    }
  };

  const onClose = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setIsOpened(false);

    if (typeof props.onClose === 'function') {
      props.onClose();
    }
  };

  const onConfirm = (event) => {
    event.stopPropagation();
    setIsOpened(false);
    props.onConfirm();
  };

  const cancelButton = props.showCancelButton ? (
    <Button extraClass="dark" onClick={onClose} text={props.cancelText} />
  ) : null;
  const modal = (
    <Modal
      show={isOpened}
      onHide={onClose}
      className={props.className}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-testid="modal"
    >
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        data-testid="body"
      >
        {props.body}

      </Modal.Body>
      <Modal.Footer
        data-testid="footer"
      >
        {cancelButton}
        <Button extraClass={props.confirmClass} onClick={onConfirm} text={props.confirmText} />
      </Modal.Footer>
    </Modal>
  );
  let content;
  if (props.children) {
    const btn = React.Children.only(props.children);
    content = React.cloneElement(
      btn,
      {
        onClick: onButtonClick,
        style: props.style,
      },
      btn.props.children,
      modal,
    );
  } else {
    content = (
      <BootstrapButton
        onClick={onButtonClick}
        cssStyle={props.style}
        data-testid="button-without-children"
      >
        {props.buttonText}
        {modal}
      </BootstrapButton>
    );
  }
  return content;
};

ConfirmModal.propTypes = {
  body: PropTypes.node.isRequired,
  buttonText: PropTypes.node,
  cancelText: PropTypes.node,
  className: PropTypes.string,
  confirmClass: PropTypes.string,
  confirmText: PropTypes.node,
  dialogClassName: PropTypes.string,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  enforceFocus: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  showCancelButton: PropTypes.bool.isRequired,
  title: PropTypes.node.isRequired,
  visible: PropTypes.bool,
};

ConfirmModal.defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  confirmClass: 'danger-full',
  showCancelButton: true,
};

export default ConfirmModal;
