import React from 'react';
import { useIntl } from 'react-intl';
import Button from '../../../elements/button';
import CustomModal from '../../../elements/customModal';
import Props from './DiscardChangesModal.types';

const DiscardChangesModal = ({
  isOpen,
  onClose,
  onClickConfirm,
  onClickCancel,
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <CustomModal
      show={isOpen}
      actionsChildren={
        <>
          <Button
            extraClass="danger-full"
            text={intl.formatMessage({ id: 'toolkit.discard.close' })}
            onClick={onClickConfirm}
          />
          <Button
            extraClass="dark"
            text={intl.formatMessage({ id: 'cancel' })}
            onClick={onClickCancel}
          />
        </>
      }
      bodyChildren={<></>}
      onHide={onClose}
      showBody={false}
      title={intl.formatMessage({ id: 'toolkit.discard.changes' })}
      size="md"
    />
  );
};

export default DiscardChangesModal;
