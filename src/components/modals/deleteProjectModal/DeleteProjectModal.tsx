import React from 'react';
import { useIntl } from 'react-intl';
import Button from '../../../elements/button';
import CustomModal from '../../../elements/customModal';
import Props from './DeleteProjectModal.types';

const DeleteProjectModal = ({
  isOpen,
  onClickConfirm,
  onClickCancel,
  isConfirmDisabled = false,
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <CustomModal
      show={isOpen}
      actionsChildren={
        <>
          <Button
            extraClass="danger-full"
            text={intl.formatMessage({ id: 'delete' })}
            onClick={onClickConfirm}
            disabled={isConfirmDisabled}
          />
          <Button
            extraClass="dark"
            text={intl.formatMessage({ id: 'cancel' })}
            onClick={onClickCancel}
          />
        </>
      }
      bodyChildren={<div>{intl.formatMessage({ id: 'toolkit.delete.project.help' })}</div>}
      title={intl.formatMessage({ id: 'toolkit.delete.project' })}
      closeButton={false}
    />
  );
};

export default DeleteProjectModal;
