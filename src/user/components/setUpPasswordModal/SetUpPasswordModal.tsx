import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import CustomModal from '../../../elements/customModal';
import Button from '../../../elements/button';
import Props from './SetUpPasswordModal.types';

const SetUpPasswordModal: FC<Props> = ({
  buttonUrl,
  showModal,
  cdnStaticUrl,
}: Props): JSX.Element => {
  const intl = useIntl();
  return (
    <>
      <CustomModal
        show={showModal}
        actionsChildren={
          <>
            <Button
              extraClass="primary-full"
              fullWidth={false}
              size="md"
              text={intl.formatMessage({ id: 'user.setUpPasswordModal.button' })}
              href={buttonUrl}
            />
          </>
        }
        backdrop="static"
        bodyChildren={
          <>
            <p>
              {intl.formatMessage({ id: 'user.setUpPasswordModal.text.1' })}
              <br />
              <br />
            </p>
            <p>{intl.formatMessage({ id: 'user.setUpPasswordModal.text.2' })}</p>
            <strong>{intl.formatMessage({ id: 'user.setUpPasswordModal.text.3' })}</strong>
          </>
        }
        closeButton={false}
        dialogClassName=""
        dividerBottom={false}
        dividerTop={false}
        showBody
        showFooter
        showHeader
        size="md"
        title={intl.formatMessage({ id: 'user.setUpPasswordModal.title' })}
        iconTitle={`${cdnStaticUrl}/frontend/icons/ic_alert_triangle.svg`}
      />
    </>
  );
};

export default SetUpPasswordModal;
