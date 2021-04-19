"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = validateAuctionForm;

var _reactIntl = require("react-intl");

var _isEmpty = _interopRequireDefault(require("../../utils/isEmpty"));

var _jsxRuntime = require("react/jsx-runtime");

function validateAuctionForm(data) {
  var errors = {};

  if (!data.isValidBankAccount && data.isMyProjet) {
    errors.bankAccount = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.bank.account",
      defaultMessage: "Please add either a national or international bank account"
    });
  }

  if (data.images.length === 0) {
    errors.images = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.images.required",
      defaultMessage: "You must upload at least one image"
    });
  }

  if ((0, _isEmpty["default"])(data.title)) {
    errors.title = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.required",
      defaultMessage: "This field is required"
    });
  }

  if ((0, _isEmpty["default"])(data.bid_start)) {
    errors.bid_start = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.required",
      defaultMessage: "This field is required"
    });
  }

  if ((0, _isEmpty["default"])(data.bid_interval)) {
    errors.bid_interval = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.required",
      defaultMessage: "This field is required"
    });
  }

  if ((0, _isEmpty["default"])(data.bid_max_interval)) {
    errors.bid_max_interval = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.required",
      defaultMessage: "This field is required"
    });
  }

  if (data.dateLimit === undefined) {
    errors.dateLimit = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.required",
      defaultMessage: "This field is required"
    });
  }

  if (data.dateStart === undefined) {
    errors.dateStart = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.required",
      defaultMessage: "This field is required"
    });
  }

  if ((0, _isEmpty["default"])(data.description)) {
    errors.description = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "user.register.error.required",
      defaultMessage: "This field is required"
    });
  }

  if (data.showBrands) {
    if (!data.brand_id) {
      errors.brand_id = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.required",
        defaultMessage: "This field is required"
      });
    }
  }

  if (data["private"] === '1') {
    if ((0, _isEmpty["default"])(data.private_code)) {
      errors.private_code = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.required",
        defaultMessage: "This field is required"
      });
    }

    if (data.private_code && data.private_code.length < 6) {
      errors.private_code = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.length6characteres",
        defaultMessage: "Enter at least 6 characters"
      });
    }
  }

  if (data.showInstitutions && !data.showProjects) {
    if ((0, _isEmpty["default"])(data.user_id.toString())) {
      errors.user_id = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.required",
        defaultMessage: "This field is required"
      });
    }
  }

  if (data.showInstitutions && data.showProjects) {
    if (!data.beneficiary) {
      errors.beneficiary = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.required",
        defaultMessage: "This field is required"
      });
    }

    if (!+data.user_id && data.projectIds.length === 0) {
      errors.user_id = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.required",
        defaultMessage: "This field is required"
      });
      errors.projectIds = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.required",
        defaultMessage: "This field is required"
      });
    }

    if (!!+data.user_id && data.projectIds.length > 0) {
      errors.user_id = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.select.only.one",
        defaultMessage: "You can not select a cause and a project, please select only one."
      });
      errors.projectIds = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.register.error.select.only.one",
        defaultMessage: "You can not select a cause and a project, please select only one."
      });
    }
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty["default"])(errors)
  };
}

module.exports = exports.default;