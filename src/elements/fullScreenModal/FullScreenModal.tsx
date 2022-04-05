import React, { useEffect, useState } from 'react';
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
  const [showModalEffect, setShowModalEffect] = useState<boolean>(showModal);

  useEffect(() => {
    const element = document.getElementsByClassName('fullscreen-modal');

    if (!showModal && element.length > 0) {
      setTimeout(() => {
        setShowModalEffect(false);
      }, 1000);
    } else {
      setShowModalEffect(showModal);
    }
  }, [showModal]);

  return (
    <>
      {showModalEffect && (
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

          <div className="fullscreen-modal__body" style={{ height: `calc(100vh - ${height})` }}>
            {children}
          </div>
          {footer && <div className="fullscreen-modal__footer">{footer}</div>}
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
