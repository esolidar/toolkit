import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import ReactTelephoneInput from 'react-telephone-input';
import { FormattedMessage } from 'react-intl';
import InputLabel from '../inputLabel';
import Button from '../button';
import { cdnStaticUrl } from '../../constants/env';

const ValidateTelephone = ({
  phone,
  localStorage,
  mobileValidatePost,
  validatePhone,
  mobileConfirmPost,
  confirmPhone,
  hasError,
  inputLabelProps,
  defaultCountry,
  verifiedPhone,
}) => {
  const [verified, setVerified] = useState(verifiedPhone);
  const [isLoading, setIsLoading] = useState(false);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const [code, setCode] = useState('');
  const [errorCode, setErrorCode] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    if (validatePhone && validatePhone.code === 200) {
      setIsLoading(false);
      setShowVerifyCode(true);
      setErrors(false);
    } else if (validatePhone && validatePhone.status === 400) {
      setVerified(0);
      setErrors(true);
      setIsLoading(false);
    }
  }, [validatePhone]);

  useEffect(() => {
    if (confirmPhone && confirmPhone.code === 200) {
      setVerified(1);
      setShowVerifyCode(false);

      const user = JSON.parse(localStorage.user);
      user.phones.push({
        code: confirmPhone.data.phone.code,
        dateAdded: confirmPhone.data.phone.dateAdded,
        id: confirmPhone.data.phone.id,
        main: confirmPhone.data.phone.main,
        phone: confirmPhone.data.phone.phone,
        twilio_sid: confirmPhone.data.phone.twilio_sid,
        updatedDate: confirmPhone.data.phone.updatedDate,
        user_id: confirmPhone.data.phone.user_id,
        verified: confirmPhone.data.phone.verified,
      });
      window.localStorage.setItem('user', JSON.stringify(user));
    } else if (confirmPhone && confirmPhone.status === 400) {
      setCode('');
      setErrorCode(true);
    }
  }, [confirmPhone]);

  useEffect(() => {
    setErrors(hasError);
  }, [hasError]);

  const handleInputBlur = (telNumber, selectedCountry) => {
    setPhoneNumber(telNumber);
    setCountryCode(selectedCountry.iso2);
  };

  const handleInputChange = (telNumber, selectedCountry) => {
    setPhoneNumber(telNumber);
    setCountryCode(selectedCountry.iso2);
  };

  const onChangeCode = e => {
    setCode(e.target.value);
  };

  const mobileValidate = () => {
    const userId = JSON.parse(localStorage.user).id;
    setIsLoading(true);
    mobileValidatePost(userId, { phone: phoneNumber, country_code: countryCode });
  };

  const mobileVerify = () => {
    const userId = JSON.parse(localStorage.user).id;
    mobileConfirmPost(userId, { code });
  };

  const isDisbaled = verified === 1;

  return (
    <div className="validate-telephone mb-3">
      {inputLabelProps && <InputLabel {...inputLabelProps} />}
      <div className="phone-box">
        <div className={`input-phone-validation ${isDisbaled && 'input-phone-disabled'}`}>
          <ReactTelephoneInput
            // eslint-disable-next-line no-nested-ternary
            defaultCountry={defaultCountry}
            autoFormat={false}
            flagsImagePath={`${cdnStaticUrl}/frontend/assets/flags.png`}
            initialValue={phone}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            disabled={isDisbaled}
          />
          {isDisbaled && <div className="phone-verified" data-testid="verified-number" />}
        </div>
        {verified === 0 && (
          <>
            <Button
              extraClass="primary"
              onClick={mobileValidate}
              text={<FormattedMessage id="validate" />}
              disabled={isLoading}
              fullWidth={false}
            />
          </>
        )}
      </div>
      {errors && (
        <div className="has-error">
          <span className="help-block">
            <FormattedMessage id="user.settings.phone.errorNumber" />
          </span>
        </div>
      )}
      {showVerifyCode && (
        <div className="verify-box">
          <div>
            <h3>
              <img
                alt="phone"
                src={`${cdnStaticUrl}/frontend/icons/ic-verification-phone-code.svg`}
              />
              <FormattedMessage id="user.settings.validate.phone.insert.verification.code" />
            </h3>
          </div>
          <div>
            <input
              onChange={onChangeCode}
              onBlur={onChangeCode}
              value={code}
              type="text"
              name="code"
              maxLength="4"
              className="form-control"
            />
            {errorCode && (
              <div className="has-error">
                <span className="help-block">
                  <FormattedMessage id="user.settings.phone.errorCode" />
                </span>
              </div>
            )}
          </div>
          <div>
            <Button
              extraClass="primary"
              onClick={mobileVerify}
              text={<FormattedMessage id="validate" />}
              fullWidth={true}
            />
          </div>
        </div>
      )}
      {verified === 0 && (
        <div className="sms-message">
          <FormattedMessage id="user.settings.validate.phone.sms.message" />
        </div>
      )}
    </div>
  );
};

ValidateTelephone.propTypes = {
  phone: PropTypes.string,
  mobileValidatePost: PropTypes.func,
  mobileConfirmPost: PropTypes.func,
  localStorage: PropTypes.shape({
    lang: PropTypes.string,
    user: PropTypes.string,
    setItem: PropTypes.func,
  }),
  validatePhone: PropTypes.object,
  confirmPhone: PropTypes.shape({
    code: PropTypes.number,
    status: PropTypes.number,
    data: PropTypes.shape({
      phone: PropTypes.object,
      verified: PropTypes.number,
    }),
  }),
  hasError: PropTypes.bool,
  inputLabelProps: PropTypes.shape({
    label: PropTypes.string,
    showOptionalLabel: PropTypes.bool,
    help: PropTypes.string,
  }),
  defaultCountry: PropTypes.string,
  verifiedPhone: PropTypes.number,
};

ValidateTelephone.defaultProps = {
  inputLabelProps: PropTypes.shape({
    showOptionalLabel: false,
  }),
  defaultCountry: 'gb',
};

export default ValidateTelephone;
