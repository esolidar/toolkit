import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import ReactTelephoneInput from 'react-telephone-input';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import InputLabel from '../../elements/inputLabel';
import { cdnStaticUrl } from '../../constants/env';

const ValidateTelephone = ({
  showOptionalLabel,
  phone,
  localStorage,
  mobileValidatePost,
  validatePhone,
  mobileConfirmPost,
  confirmPhone,
  hasError,
}) => {
  const [verified, setVerified] = useState(0);
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

  let defaultCountry = 'gb';
  if (localStorage.lang !== 'en') defaultCountry = 'pt';
  else if (localStorage.lang === 'br') defaultCountry = 'br';

  return (
    <Col className="validate-telephone box mb-3">
      <Row>
        <Col sm={12}>
          <InputLabel
            label={<FormattedMessage id="toolkit.phone.number" />}
            showOptionalLabel={showOptionalLabel}
            help={<FormattedMessage id="user.settings.phone.message" />}
          />
        </Col>
      </Row>
      <Row className="phone-box">
        <Col sm={8}>
          <ReactTelephoneInput
            // eslint-disable-next-line no-nested-ternary
            defaultCountry={defaultCountry}
            autoFormat={false}
            flagsImagePath={`${cdnStaticUrl}/frontend/assets/flags.png`}
            initialValue={phone}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            disabled={verified === 1}
            id="teste"
          />
          {errors && (
            <div className="has-error">
              <span className="help-block">
                <FormattedMessage id="user.settings.phone.errorNumber" />
              </span>
            </div>
          )}
          {verified === 1 && <div className="phone-verified" data-testid="verified-number" />}
        </Col>
        {verified === 0 && (
          <>
            <div className="col-sm-4">
              <button
                type="button"
                onClick={mobileValidate}
                disabled={isLoading}
                className="btn btn-validate-phone"
              >
                <FormattedMessage id="validate" />
              </button>
            </div>
            <div className="col-sm-12 sms-message">
              <FormattedMessage id="user.settings.validate.phone.sms.message" />
            </div>
          </>
        )}
        {showVerifyCode && (
          <Col sm={12}>
            <div className="verify-box">
              <Col sm={12}>
                <h3>
                  <img
                    alt="phone"
                    src={`${cdnStaticUrl}/frontend/icons/ic-verification-phone-code.svg`}
                  />
                  <FormattedMessage id="user.settings.validate.phone.insert.verification.code" />
                </h3>
              </Col>
              <Col sm={12}>
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
              </Col>
              <Col sm={12}>
                <button type="button" onClick={mobileVerify} className="btn btn-verify-phone">
                  <FormattedMessage id="validate" />
                </button>
              </Col>
            </div>
          </Col>
        )}
      </Row>
    </Col>
  );
};

ValidateTelephone.propTypes = {
  showOptionalLabel: PropTypes.bool,
  phone: PropTypes.number,
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
};

export default ValidateTelephone;
