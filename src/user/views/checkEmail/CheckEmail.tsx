import React, { FC, useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Button from '../../../elements/button';
import DidNotReceiveEmailModal from '../../components/didNotReceiveEmailModal';
import Props from './CheckEmail.types';

const CheckEmail: FC<Props> = ({ email, actions }: Props): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const intl = useIntl();

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="set-password">
        <div className="set-password__title">
          <h1>
            {intl.formatMessage({
              id: 'user.checkEmail.title',
            })}
          </h1>
        </div>
        <div className="set-password__form">
          <div className="set-password__form--description">
            <div>
              <FormattedMessage id="user.checkEmail.subtitle1" values={{ email: <b>{email}</b> }} />
            </div>
            <div>
              <FormattedMessage id="user.checkEmail.subtitle2" />
            </div>
          </div>
          <div className="form-group set-password__form--email-input-link">
            <Button
              extraClass="link"
              onClick={actions.handleChangeEmail}
              text={intl.formatMessage({
                id: 'user.checkEmail.change.email',
              })}
            />
            <Button
              extraClass="link"
              onClick={() => setShowModal(true)}
              text={intl.formatMessage({
                id: 'user.checkEmail.resend',
              })}
            />
          </div>
        </div>
      </div>
      <DidNotReceiveEmailModal
        showModal={showModal}
        buttonUrl={actions.handleChangeEmail}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default CheckEmail;
