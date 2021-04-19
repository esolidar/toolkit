"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTelephoneInput = _interopRequireDefault(require("react-telephone-input"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var ValidateTelephone = function ValidateTelephone(_ref) {
  var phone = _ref.phone,
      localStorage = _ref.localStorage,
      mobileValidatePost = _ref.mobileValidatePost,
      validatePhone = _ref.validatePhone,
      mobileConfirmPost = _ref.mobileConfirmPost,
      confirmPhone = _ref.confirmPhone,
      hasError = _ref.hasError;

  var _useState = (0, _react.useState)(0),
      verified = _useState[0],
      setVerified = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      showVerifyCode = _useState3[0],
      setShowVerifyCode = _useState3[1];

  var _useState4 = (0, _react.useState)(''),
      code = _useState4[0],
      setCode = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      errorCode = _useState5[0],
      setErrorCode = _useState5[1];

  var _useState6 = (0, _react.useState)(''),
      phoneNumber = _useState6[0],
      setPhoneNumber = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      countryCode = _useState7[0],
      setCountryCode = _useState7[1];

  var _useState8 = (0, _react.useState)(false),
      errors = _useState8[0],
      setErrors = _useState8[1];

  (0, _react.useEffect)(function () {
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
  (0, _react.useEffect)(function () {
    if (confirmPhone && confirmPhone.code === 200) {
      setVerified(1);
      setShowVerifyCode(false);
      var user = JSON.parse(localStorage.user);
      user.phones.push({
        code: confirmPhone.data.phone.code,
        dateAdded: confirmPhone.data.phone.dateAdded,
        id: confirmPhone.data.phone.id,
        main: confirmPhone.data.phone.main,
        phone: confirmPhone.data.phone.phone,
        twilio_sid: confirmPhone.data.phone.twilio_sid,
        updatedDate: confirmPhone.data.phone.updatedDate,
        user_id: confirmPhone.data.phone.user_id,
        verified: confirmPhone.data.phone.verified
      });
      window.localStorage.setItem('user', JSON.stringify(user));
    } else if (confirmPhone && confirmPhone.status === 400) {
      setCode('');
      setErrorCode(true);
    }
  }, [confirmPhone]);
  (0, _react.useEffect)(function () {
    setErrors(hasError);
  }, [hasError]);

  var handleInputBlur = function handleInputBlur(telNumber, selectedCountry) {
    setPhoneNumber(telNumber);
    setCountryCode(selectedCountry.iso2);
  };

  var handleInputChange = function handleInputChange(telNumber, selectedCountry) {
    setPhoneNumber(telNumber);
    setCountryCode(selectedCountry.iso2);
  };

  var onChangeCode = function onChangeCode(e) {
    setCode(e.target.value);
  };

  var mobileValidate = function mobileValidate() {
    var userId = JSON.parse(localStorage.user).id;
    setIsLoading(true);
    mobileValidatePost(userId, {
      phone: phoneNumber,
      country_code: countryCode
    });
  };

  var mobileVerify = function mobileVerify() {
    var userId = JSON.parse(localStorage.user).id;
    mobileConfirmPost(userId, {
      code: code
    });
  };

  var defaultCountry = 'gb';
  if (localStorage.lang !== 'en') defaultCountry = 'pt';else if (localStorage.lang === 'br') defaultCountry = 'br';
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
    className: "validate-telephone box mb-3",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        className: "title-add-contact",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "user.settings.title.addContact",
          defaultMessage: "Add Contact"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      className: "phone-box",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
        sm: 8,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTelephoneInput["default"] // eslint-disable-next-line no-nested-ternary
        , {
          defaultCountry: defaultCountry,
          autoFormat: false,
          flagsImagePath: _env.cdnStaticUrl + "/frontend/assets/flags.png",
          initialValue: phone,
          onChange: handleInputChange,
          onBlur: handleInputBlur,
          disabled: verified === 1
        }), errors && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "has-error",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "help-block",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "user.settings.phone.errorNumber",
              defaultMessage: "Phone is not valid"
            })
          })
        }), verified === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "phone-verified",
          "data-testid": "verified-number"
        })]
      }), verified === 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "col-sm-4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: mobileValidate,
            disabled: isLoading,
            className: "btn btn-validate-phone",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "user.settings.btn.validate.phone",
              defaultMessage: "Validate"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "col-sm-12 sms-message",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "user.settings.validate.phone.sms.message",
            defaultMessage: "You will receive an SMS with the validation code"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "col-sm-12 sms-message",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "user.settings.phone.message" // eslint-disable-next-line max-len
          ,
          defaultMessage: "You should validate your telephone number, so we can contact you when one of your items is sold or you win a charity auction. This information is also necessary to validate the identity of active users in auctions, purchases, and sales, as well as any irregular supervenient circumstance."
        })
      }), showVerifyCode && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "verify-box",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 12,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                alt: "phone",
                src: _env.cdnStaticUrl + "/frontend/icons/ic-verification-phone-code.svg"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "user.settings.validate.phone.insert.verification.code",
                defaultMessage: "Insert your validation code"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
            sm: 12,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              onChange: onChangeCode,
              onBlur: onChangeCode,
              value: code,
              type: "text",
              name: "code",
              maxLength: "4",
              className: "form-control"
            }), errorCode && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "has-error",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "help-block",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "user.settings.phone.errorCode",
                  defaultMessage: "Code is not valid"
                })
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 12,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              onClick: mobileVerify,
              className: "btn btn-verify-phone",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "user.settings.verify.phone",
                defaultMessage: "Verify"
              })
            })
          })]
        })
      })]
    })]
  });
};

ValidateTelephone.propTypes = process.env.NODE_ENV !== "production" ? {
  phone: _propTypes["default"].number,
  mobileValidatePost: _propTypes["default"].func,
  mobileConfirmPost: _propTypes["default"].func,
  localStorage: _propTypes["default"].shape({
    lang: _propTypes["default"].string,
    user: _propTypes["default"].string,
    setItem: _propTypes["default"].func
  }),
  validatePhone: _propTypes["default"].object,
  confirmPhone: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    status: _propTypes["default"].number,
    data: _propTypes["default"].shape({
      phone: _propTypes["default"].object,
      verified: _propTypes["default"].number
    })
  }),
  hasError: _propTypes["default"].bool
} : {};
var _default = ValidateTelephone;
exports["default"] = _default;
module.exports = exports.default;