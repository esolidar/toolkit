import React from 'react';
import classnames from 'classnames';
import Props from './FullScreenModal.types';
import Button from '../button';
import Icon from '../icon';

const FullScreenModal = ({
  children,
  showModal,
  closeModal,
  header,
  footer,
  showHeader = false,
}: Props): JSX.Element => {
  const headerHeight = 88;
  const footerHeight = footer ? 65 : 0;
  const height = `${headerHeight + footerHeight}px`;

  return (
    <div
      className={classnames('fullscreen-modal', { open: showModal }, { closed: !showModal })}
      id="wizard"
    >
      {!header && !showHeader && (
        <div className="fullscreen-modal__header">
          <Button
            type="icon"
            extraClass="primary-full"
            icon={<Icon name="X" size="sm" />}
            onClick={closeModal}
            ghost
          />
        </div>
      )}
      {header && <div>{header}</div>}
      <div className="fullscreen-modal__body" style={{ maxHeight: `calc(100vh - ${height})` }}>
        {children}
      </div>
      {footer && <div className="fullscreen-modal__footer">{footer}</div>}
    </div>
  );
};

export default FullScreenModal;
