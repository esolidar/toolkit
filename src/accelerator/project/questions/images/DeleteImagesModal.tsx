import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Button from '../../../../elements/button';
import CustomModal from '../../../../elements/customModal';

interface Props {
  isOpen: boolean;
  onClickDelete(): void;
  onClose(): void;
}

const DeleteImagesModal = ({ isOpen, onClickDelete, onClose }: Props): JSX.Element => {
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
            dataTestId="delete-image"
          />
          <Button
            extraClass="dark"
            onClick={onClose}
            size="md"
            text={intl.formatMessage({ id: 'cancel' })}
            dataTestId="close-delete-image"
          />
        </>
      }
      onHide={onClose}
      bodyChildren={
        <p>
          <FormattedMessage id="toolkit.delete.image.description" />
        </p>
      }
      title={intl.formatMessage({ id: 'toolkit.delete.image' })}
      size="md"
    />
  );
};

export default DeleteImagesModal;
