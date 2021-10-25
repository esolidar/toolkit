import React, { FC } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import CustomModal from '../../../elements/customModal';
import Button from '../../../elements/button';
import Props from './CodeExpiredModal.types';

const CodeExpiredModal: FC<Props> = ({
  buttonUrl,
  showModal,
  handleCloseModal,
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <>
      <CustomModal
        show={showModal}
        backdrop="static"
        onHide={handleCloseModal}
        bodyChildren={
          <div className="codeExpiredModal">
            <p>
              <FormattedMessage id="user.codeExpiredModal.text.1" />
              <br />
              <FormattedMessage id="user.codeExpiredModal.text.2" />
            </p>
            <Button
              extraClass="link"
              href={buttonUrl}
              text={intl.formatMessage({ id: 'user.codeExpiredModal.button' })}
            />
          </div>
        }
        closeButton={true}
        dialogClassName=""
        dividerBottom={false}
        dividerTop={false}
        showBody
        showFooter={false}
        showHeader
        size="md"
        title={intl.formatMessage({ id: 'user.codeExpiredModal.title' })}
      />
    </>
  );
};

export default CodeExpiredModal;
