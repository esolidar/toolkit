import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap';
import Button from '../button';
import CustomModal from '../customModal';

const ConfirmModal = props => {
  const border = '1px solid #dee2e6';

  const headerStyle = {
    borderBottom: props.dividerTop ? border : 'none',
  };

  const bodyStyle = {
    padding: props.bodyPadding || 'auto',
  };

  const footerStyle = {
    borderTop: props.dividerBottom ? border : 'none',
  };

  const [isOpened, setIsOpened] = useState(props.visible);

  const onButtonClick = () => {
    // Since the modal is inside the button click events will propagate up.
    if (!isOpened) {
      setIsOpened(true);
    }
  };

  const onClose = event => {
    if (event) {
      event.stopPropagation();
    }
    setIsOpened(false);

    if (typeof props.onClose === 'function') {
      props.onClose();
    }
  };

  const onConfirm = event => {
    event.stopPropagation();
    setIsOpened(false);
    props.onConfirm();
  };

  const cancelButton = props.showCancelButton ? (
    <Button extraClass="dark" onClick={onClose} text={props.cancelText} />
  ) : null;
  const modal = (
    <>
      <CustomModal
        show={isOpened}
        dialogClassName={props.className}
        headerClassName={props.headerClassName}
        titleClassName={props.titleClassName}
        bodyClassName={props.bodyClassName}
        footerClassName={props.footerClassName}
        onHide={onClose}
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        footerStyle={footerStyle}
        title={props.title}
        bodyChildren={props.body}
        size={props.size || 'sm'}
        actionsChildren={
          <>
            <Button
              extraClass={props.confirmClass}
              onClick={onConfirm}
              text={props.confirmText}
              dataTestId="btn-confirm"
            />
            {cancelButton}
          </>
        }
      />
    </>
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
      modal
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
  className: 'condirm-modal',
};

export default ConfirmModal;
