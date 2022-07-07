import React from 'react';
import { useIntl } from 'react-intl';
import Button from '../../../elements/button';
import CustomModal from '../../../elements/customModal';
import Props from './DeleteModal.types';

const DeleteModal = ({
  isDeleteDisabled = false,
  isOpen,
  onClickDelete,
  onClickCancel,
  title,
  bodyText,
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
            onClick={onClickDelete}
            dataTestId="delete-button"
            disabled={isDeleteDisabled}
          />
          <Button
            extraClass="dark"
            text={intl.formatMessage({ id: 'cancel' })}
            onClick={onClickCancel}
            dataTestId="cancel-button"
          />
        </>
      }
      bodyChildren={bodyText}
      title={title}
      closeButton={false}
    />
  );
};

export default DeleteModal;
