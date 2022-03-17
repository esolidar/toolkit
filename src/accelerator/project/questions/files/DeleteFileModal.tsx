import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Button from '../../../../elements/button';
import CustomModal from '../../../../elements/customModal';

interface Props {
  isOpen: boolean;
  onClickDelete(): void;
  onClose(): void;
}

const DeleteFileModal = ({ isOpen, onClickDelete, onClose }: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <CustomModal
      show={isOpen}
      actionsChildren={
        <>
          <Button
            extraClass="danger-full"
            size="md"
            text={intl.formatMessage({ id: 'delete' })}
            onClick={onClickDelete}
            dataTestId="delete-file"
          />
          <Button
            extraClass="dark"
            onClick={onClose}
            size="md"
            text={intl.formatMessage({ id: 'cancel' })}
            dataTestId="close-delete-file"
          />
        </>
      }
      onHide={onClose}
      bodyChildren={
        <p>
          <FormattedMessage id="toolkit.delete.file.description" />
        </p>
      }
      title={intl.formatMessage({ id: 'toolkit.delete.file' })}
      size="md"
    />
  );
};

export default DeleteFileModal;
