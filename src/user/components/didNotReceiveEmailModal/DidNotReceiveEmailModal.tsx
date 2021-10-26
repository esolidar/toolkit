import React, { FC } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import CustomModal from '../../../elements/customModal';
import Button from '../../../elements/button';
import Props from './DidNotReceiveEmailModal.types';

const SetUpPasswordModal: FC<Props> = ({
  buttonUrl,
  showModal,
  handleCloseModal,
  handleResendEmail,
}: Props): JSX.Element => {
  const intl = useIntl();
  return (
    <>
      <CustomModal
        show={showModal}
        onHide={handleCloseModal}
        bodyChildren={
          <div className="didNotReceiveEmailModal">
            <ol>
              <li>{intl.formatMessage({ id: 'user.didNotReceiveEmailModal.text.1' })}</li>
              <li>{intl.formatMessage({ id: 'user.didNotReceiveEmailModal.text.2' })}</li>
              <li>
                <FormattedMessage
                  id="user.didNotReceiveEmailModal.text.3"
                  values={{
                    a: (
                      <Button
                        extraClass="link"
                        onClick={buttonUrl}
                        text={intl.formatMessage({ id: 'user.didNotReceiveEmailModal.text.3.a' })}
                      />
                    ),
                  }}
                />
              </li>
              <li>
                <FormattedMessage
                  id="user.didNotReceiveEmailModal.text.4"
                  values={{
                    a: (
                      <Button
                        extraClass="link"
                        onClick={handleResendEmail}
                        text={intl.formatMessage({ id: 'user.didNotReceiveEmailModal.text.4.a' })}
                      />
                    ),
                  }}
                />
              </li>
            </ol>

            <p className="didNotReceiveEmailModal__footer">
              <FormattedMessage
                id="user.didNotReceiveEmailModal.footer"
                values={{
                  email: <a href="mailto:info@esolidar.com">info@esolidar.com</a>,
                }}
              />
            </p>
          </div>
        }
        showFooter={false}
        title={intl.formatMessage({ id: 'user.checkEmail.resend' })}
      />
    </>
  );
};

export default SetUpPasswordModal;
