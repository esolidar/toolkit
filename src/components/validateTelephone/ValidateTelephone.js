import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactTelephoneInput from 'react-telephone-input';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';

const ValidateTelephone = ({
  phone,
  localStorage,
  mobileValidatePost,
  validatePhone,
  mobileConfirmPost,
  confirmPhone,
}) => {
  const [verified, setVerified] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputBlur = (telNumber, selectedCountry) => {
    setPhoneNumber(telNumber);
    setCountryCode(selectedCountry.iso2);
  };

  const handleInputChange = (telNumber, selectedCountry) => {
    setPhoneNumber(telNumber);
    setCountryCode(selectedCountry.iso2);
  };

  const onChangeCode = (e) => {
    setCode({ [e.target.name]: e.target.value, unsaved: true });
  };

  const mobileValidate = () => {
    const userId = JSON.parse(localStorage.user).id;
    setIsLoading(true);
    setErrors({});
    mobileValidatePost(userId, { phone: phoneNumber, country_code: countryCode }).then(() => {
      if (validatePhone.code === 200) {
        setIsLoading(false);
        setShowVerifyCode(true);
      } else {
        errors.phone = localStorage.lang === 'en' ? 'Phone number is invalid' : 'O número é inválido';
        setErrors(errors);
        setIsLoading(true);
      }
    });
  };

  const mobileVerify = () => {
    const userId = JSON.parse(localStorage.user).id;
    mobileConfirmPost(userId, { code }).then(() => {
      if (confirmPhone.code === 200) {
        setVerified(1);
        setShowVerifyCode(false);
      } else {
        setCode('');
      }
    });
  };

  return (
    <Col className="validate-telephone box mb-3">
      <Row className="phone-box">
        <Col sm={8}>
          <ReactTelephoneInput
            // eslint-disable-next-line no-nested-ternary
            defaultCountry={localStorage.lang !== 'en' ? 'pt' : (localStorage.lang === 'br' ? 'br' : 'gb')}
            autoFormat={false}
            flagsImagePath="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/flags.png"
            initialValue={phone}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            disabled={verified === 1}
          />
          {errors.phone && (
            <div className="has-error">
              <span
                className="help-block"
              >
                {errors.phone}
              </span>
            </div>
          )}
          {verified === 1
            && <div className="phone-verified" />}
        </Col>
        {verified === 0
          && (
            <div className="col-sm-4">
              <button
                type="button"
                onClick={mobileValidate}
                disabled={isLoading}
                className="btn btn-validate-phone"
              >
                <FormattedMessage
                  id="user.settings.btn.validate.phone"
                  defaultMessage="Validate"
                />
              </button>
            </div>
          )}
        {verified === 0
          && (
            <div className="col-sm-12 sms-message">
              <FormattedMessage
                id="user.settings.validate.phone.sms.message"
                defaultMessage="You will receive an SMS with the validation code"
              />
            </div>
          )}
        <div className="col-sm-12 sms-message">
          <FormattedMessage
            id="user.settings.phone.message"
            // eslint-disable-next-line max-len
            defaultMessage="You should validate your telephone number, so we can contact you when one of your items is sold or you win a charity auction. This information is also necessary to validate the identity of active users in auctions, purchases, and sales, as well as any irregular supervenient circumstance."
          />
        </div>
        {showVerifyCode
          && (
            <Col sm={12}>
              <div className="verify-box">
                <Col sm={12}>
                  <h3>
                    <img
                      alt="phone"
                      src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-verification-phone-code.svg"
                    />
                    <FormattedMessage
                      id="user.settings.validate.phone.insert.verification.code"
                      defaultMessage="Insert your validation code"
                    />
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
                </Col>
                <Col sm={12}>
                  <button
                    type="button"
                    onClick={mobileVerify}
                    className="btn btn-verify-phone"
                  >
                    <FormattedMessage
                      id="user.settings.verify.phone"
                      defaultMessage="Verify"
                    />
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
  phone: PropTypes.number,
  mobileValidatePost: PropTypes.func,
  mobileConfirmPost: PropTypes.func,
  localStorage: PropTypes.shape({
    lang: PropTypes.string,
    user: PropTypes.object,
  }),
  validatePhone: PropTypes.object,
  confirmPhone: PropTypes.shape({
    code: PropTypes.number,
  }),
};

export default ValidateTelephone;
