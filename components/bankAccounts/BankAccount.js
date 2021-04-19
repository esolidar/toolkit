"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends7 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _iban = _interopRequireDefault(require("iban"));

var _reactBootstrap = require("react-bootstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _confirmModal = _interopRequireDefault(require("../../elements/confirmModal"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

var BankAccount = function BankAccount(_ref) {
  var countryId = _ref.countryId,
      userBankTransfer = _ref.userBankTransfer,
      color = _ref.color,
      postBankTransfer = _ref.postBankTransfer,
      userId = _ref.userId,
      bankTransfer = _ref.bankTransfer,
      updateLocalstorage = _ref.updateLocalstorage,
      saveBankAccount = _ref.saveBankAccount,
      hideSaveButton = _ref.hideSaveButton,
      bankAccountSubmitReset = _ref.bankAccountSubmitReset,
      cols = _ref.cols,
      checkIsValidBankAccount = _ref.checkIsValidBankAccount;

  var _useState = (0, _react.useState)({}),
      errors = _useState[0],
      setErrors = _useState[1];

  var _useState2 = (0, _react.useState)(userBankTransfer || {}),
      bankAccounts = _useState2[0],
      setBankAccounts = _useState2[1];

  (0, _react.useEffect)(function () {
    if (bankTransfer && bankTransfer.code === 200) {
      updateLocalstorage(bankAccounts);
    }
  }, [bankTransfer]);

  var handdleChangeAccount = function handdleChangeAccount(e, i, countryId) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    var form = (0, _extends7["default"])({}, bankAccounts);
    form[countryId][i][name] = value;
    setBankAccounts(form);
  };

  var handleAddIntenationalAccount = function handleAddIntenationalAccount() {
    var newAccounts = bankAccounts[1] || [];
    newAccounts.push({
      iban: '',
      bic: ''
    });
    setBankAccounts(function (prevState) {
      return (0, _extends7["default"])({}, prevState, {
        1: newAccounts
      });
    });
  };

  var handleAddAccount = function handleAddAccount() {
    var newAccounts = bankAccounts[countryId] || [];
    var account = {};

    switch (countryId) {
      case 150:
        account = {
          bank_branch: '',
          bank_checking_account: '',
          bank_number: '',
          beneficiary: '',
          cnpj: ''
        };
        break;

      case 231:
        account = {
          accountholder: '',
          banksortcode: '',
          accountnumber: ''
        };
        break;

      case 208:
        account = {
          iban: '',
          nib: '',
          bic: ''
        };
        break;

      default:
        account = {
          iban: '',
          bic: ''
        };
    }

    newAccounts.push(account);
    setBankAccounts(function (prevState) {
      var _extends2;

      return (0, _extends7["default"])({}, prevState, (_extends2 = {}, _extends2[countryId] = newAccounts, _extends2));
    });
  };

  var handleDeleteInternationalAccount = function handleDeleteInternationalAccount(i) {
    var newAccounts = bankAccounts[1];
    newAccounts.splice(i, 1);
    setBankAccounts(function (prevState) {
      return (0, _extends7["default"])({}, prevState, {
        1: newAccounts
      });
    });
  };

  var handleDeleteAccount = function handleDeleteAccount(i) {
    var newAccounts = bankAccounts[countryId];
    newAccounts.splice(i, 1);
    setBankAccounts(function (prevState) {
      var _extends3;

      return (0, _extends7["default"])({}, prevState, (_extends3 = {}, _extends3[countryId] = newAccounts, _extends3));
    });
  };

  var isValid = function isValid() {
    setErrors({});
    var isValid = true;

    if ((0, _utils.isEmpty)(bankAccounts)) {
      return false;
    }

    Object.keys(bankAccounts).map(function (key) {
      var value = bankAccounts[key];
      value.map(function (item, i) {
        Object.keys(item).map(function (formKey) {
          var formValue = item[formKey];

          if (formKey === 'iban' && !_iban["default"].isValid(formValue)) {
            setErrors(function (prevState) {
              var _extends4;

              return (0, _extends7["default"])({}, prevState, (_extends4 = {}, _extends4["account-" + key + "-indx-" + i + "-field-" + formKey] = (0, _reactIntl.useIntl)().formatMessage({
                id: 'iban.invalid',
                defaultMessage: 'This IBAN is invalid'
              }), _extends4));
            });
            isValid = false;
          }

          if (formKey === 'iban' && _iban["default"].isValid(formValue)) {
            setErrors(function (prevState) {
              var _extends5;

              return (0, _extends7["default"])({}, prevState, (_extends5 = {}, _extends5["account-" + key + "-indx-" + i + "-field-iban"] = '', _extends5));
            });
          }

          if (formValue === '') {
            setErrors(function (prevState) {
              var _extends6;

              return (0, _extends7["default"])({}, prevState, (_extends6 = {}, _extends6["account-" + key + "-indx-" + i + "-field-" + formKey] = (0, _reactIntl.useIntl)().formatMessage({
                id: 'required',
                defaultMessage: 'This field is required'
              }), _extends6));
            });
            isValid = false;
          }
        });
      });
    });
    checkIsValidBankAccount(isValid);
    return isValid;
  };

  var handleSubmit = function handleSubmit() {
    if (isValid()) {
      setErrors({});
      var data = {
        bank_transfer: JSON.stringify(bankAccounts)
      };
      postBankTransfer(userId, data);
    }
  };

  (0, _react.useEffect)(function () {
    if (saveBankAccount) {
      handleSubmit();
      bankAccountSubmitReset();
    }
  }, [saveBankAccount]);

  var renderInternacionalAccounts = function renderInternacionalAccounts(accounts) {
    if (!(0, _utils.isEmpty)(accounts) && !(0, _utils.isEmpty)(accounts[1] || [])) {
      return accounts[1].map(function (account, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: cols,
          className: errors["account[" + i + "]"] ? 'has-error mb-5' : 'mb-5',
          "data-testid": "international-accounts-" + i,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "box",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
                  style: {
                    color: color
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "bank.account.international.value",
                    defaultMessage: "International account #{value}",
                    values: {
                      value: i + 1
                    }
                  }), i !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_confirmModal["default"], {
                    onConfirm: function onConfirm() {
                      return handleDeleteInternationalAccount(i);
                    },
                    title: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.title',
                      defaultMessage: 'Delete account'
                    }),
                    body: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.body',
                      defaultMessage: 'Are you sure you want to delete this account?'
                    }),
                    confirmText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'confirm',
                      defaultMessage: 'Confirm'
                    }),
                    cancelText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'cancel',
                      defaultMessage: 'Cancel'
                    }),
                    style: {
                      "float": 'right',
                      color: '#888'
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      type: "button",
                      className: "edit-button",
                      "data-testid": "btn-delete-international-account-" + i,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                        icon: _freeSolidSvgIcons.faTrash,
                        className: "mr-1",
                        title: (0, _reactIntl.useIntl)().formatMessage({
                          id: 'bank.account.delete',
                          defaultMessage: 'Delete account'
                        })
                      })
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "iban[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'iban',
                    defaultMessage: 'IBAN'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, 1);
                  },
                  error: errors["account-1-indx-" + i + "-field-iban"],
                  value: account.iban,
                  field: "iban"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "bic[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'bic.swift',
                    defaultMessage: 'BIC/SWIFT'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, 1);
                  },
                  error: errors["account-1-indx-" + i + "-field-bic"],
                  value: account.bic,
                  field: "bic"
                })]
              })
            })
          })
        }, i);
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      className: "bank-account",
      "data-testid": "no-international-accounts",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "box text-center no-bank-accounts",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "bank.account.empty.international",
          defaultMessage: "There are no international bank accounts, please add."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          extraClass: "dark",
          onClick: handleAddIntenationalAccount,
          text: (0, _reactIntl.useIntl)().formatMessage({
            id: 'bank.account.add.international',
            defaultMessage: 'Add international account'
          }),
          dataTestId: "add-international-bank-account"
        })]
      })
    });
  };

  var renderAccounts = function renderAccounts(accounts) {
    if (!(0, _utils.isEmpty)(accounts) && !(0, _utils.isEmpty)(accounts[countryId] || [])) {
      switch (countryId) {
        case 150:
          // Brasil
          return bankAccounts[countryId].map(function (account, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: cols,
              className: errors["account[" + i + "]"] ? 'has-error mb-5' : 'mb-5',
              "data-testid": "national-accounts-" + i,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "box",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
                  style: {
                    color: color
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "bank.account",
                    defaultMessage: "Account #{value}",
                    values: {
                      value: i + 1
                    }
                  }), i !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_confirmModal["default"], {
                    onConfirm: function onConfirm() {
                      return handleDeleteAccount(i);
                    },
                    title: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.title',
                      defaultMessage: 'Delete account'
                    }),
                    body: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.body',
                      defaultMessage: 'Are you sure you want to delete this account?'
                    }),
                    confirmText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'confirm',
                      defaultMessage: 'Confirm'
                    }),
                    cancelText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'cancel',
                      defaultMessage: 'Cancel'
                    }),
                    style: {
                      "float": 'right',
                      color: '#888'
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      type: "button",
                      className: "edit-button",
                      style: {
                        "float": 'right',
                        color: '#888'
                      },
                      "data-testid": "btn-delete-national-account-" + i,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                        icon: _freeSolidSvgIcons.faTrash,
                        className: "mr-1",
                        title: (0, _reactIntl.useIntl)().formatMessage({
                          id: 'bank.account.delete',
                          defaultMessage: 'Delete account'
                        })
                      })
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "bank_number[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'bank.account.field',
                    defaultMessage: 'Account'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-bank_number"],
                  value: account.bank_number,
                  field: "bank_number"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "beneficiary[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'bank.account.beneficiary',
                    defaultMessage: 'Account holder'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-beneficiary"],
                  value: account.beneficiary,
                  field: "beneficiary"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "cnpj[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'bank.account.cnpj',
                    defaultMessage: 'VAT'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-cnpj"],
                  value: account.cnpj,
                  field: "cnpj"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "bank_branch[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'bank.account.bank_branch',
                    defaultMessage: 'Bank branch'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-bank_branch"],
                  value: account.bank_branch,
                  field: "bank_branch"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "bank_checking_account[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'bank.account.bank_checking_account',
                    defaultMessage: 'Current bank account'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-bank_checking_account"],
                  value: account.bank_checking_account,
                  field: "bank_checking_account"
                })]
              })
            }, i);
          });

        case 208:
          // Portugal
          return bankAccounts[countryId].map(function (account, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: cols,
              className: errors["account[" + i + "]"] ? 'has-error mb-5' : 'mb-5',
              "data-testid": "national-accounts-" + i,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "box",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
                  style: {
                    color: color
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "bank.account",
                    defaultMessage: "Account #{value}",
                    values: {
                      value: i + 1
                    }
                  }), i !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_confirmModal["default"], {
                    onConfirm: function onConfirm() {
                      return handleDeleteAccount(i);
                    },
                    title: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.title',
                      defaultMessage: 'Delete account'
                    }),
                    body: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.body',
                      defaultMessage: 'Are you sure you want to delete this account?'
                    }),
                    confirmText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'confirm',
                      defaultMessage: 'Confirm'
                    }),
                    cancelText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'cancel',
                      defaultMessage: 'Cancel'
                    }),
                    style: {
                      "float": 'right',
                      color: '#888'
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      type: "button",
                      className: "edit-button",
                      style: {
                        "float": 'right',
                        color: '#888'
                      },
                      "data-testid": "btn-delete-national-account-" + i,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                        icon: _freeSolidSvgIcons.faTrash,
                        className: "mr-1",
                        title: (0, _reactIntl.useIntl)().formatMessage({
                          id: 'bank.account.delete',
                          defaultMessage: 'Delete account'
                        })
                      })
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "iban[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'iban',
                    defaultMessage: 'IBAN'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-iban"],
                  value: account.iban,
                  field: "iban"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "nib[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'nib',
                    defaultMessage: 'NIB'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-nib"],
                  value: account.nib,
                  field: "nib"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "bic[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'bic.swift',
                    defaultMessage: 'BIC/SWIFT'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-bic"],
                  value: account.bic,
                  field: "bic"
                })]
              })
            }, i);
          });

        case 231:
          // United Kingdom
          return bankAccounts[countryId].map(function (account, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: cols,
              className: errors["account[" + i + "]"] ? 'has-error mb-5' : 'mb-5',
              "data-testid": "national-accounts-" + i,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "box",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
                  style: {
                    color: color
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "bank.account",
                    defaultMessage: "Account #{value}",
                    values: {
                      value: i + 1
                    }
                  }), i !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_confirmModal["default"], {
                    onConfirm: function onConfirm() {
                      return handleDeleteAccount(i);
                    },
                    title: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.title',
                      defaultMessage: 'Delete account'
                    }),
                    body: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.body',
                      defaultMessage: 'Are you sure you want to delete this account?'
                    }),
                    confirmText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'confirm',
                      defaultMessage: 'Confirm'
                    }),
                    cancelText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'cancel',
                      defaultMessage: 'Cancel'
                    }),
                    style: {
                      "float": 'right',
                      color: '#888'
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      type: "button",
                      className: "edit-button",
                      style: {
                        "float": 'right',
                        color: '#888'
                      },
                      "data-testid": "btn-delete-national-account-" + i,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                        icon: _freeSolidSvgIcons.faTrash,
                        className: "mr-1",
                        title: (0, _reactIntl.useIntl)().formatMessage({
                          id: 'bank.account.delete',
                          defaultMessage: 'Delete account'
                        })
                      })
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "accountholder[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'accountholder',
                    defaultMessage: 'Account holder'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-accountholder"],
                  value: account.accountholder,
                  field: "accountholder"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "banksortcode[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'banksortcode',
                    defaultMessage: 'Bank sort code'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-banksortcode"],
                  value: account.banksortcode,
                  field: "banksortcode"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "accountnumber[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'accountnumber',
                    defaultMessage: 'Account number'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-accountnumber"],
                  value: account.accountnumber,
                  field: "accountnumber"
                })]
              })
            }, i);
          });

        default:
          // Rest of the world
          return bankAccounts[countryId].map(function (account, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: cols,
              className: errors["account[" + i + "]"] ? 'has-error mb-5' : 'mb-5',
              "data-testid": "national-accounts-" + i,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "box",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
                  style: {
                    color: color
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "bank.account",
                    defaultMessage: "Account #{value}",
                    values: {
                      value: i + 1
                    }
                  }), i !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_confirmModal["default"], {
                    onConfirm: function onConfirm() {
                      return handleDeleteAccount(i);
                    },
                    title: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.title',
                      defaultMessage: 'Delete account'
                    }),
                    body: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'bank.account.delete.body',
                      defaultMessage: 'Are you sure you want to delete this account?'
                    }),
                    confirmText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'confirm',
                      defaultMessage: 'Confirm'
                    }),
                    cancelText: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'cancel',
                      defaultMessage: 'Cancel'
                    }),
                    style: {
                      "float": 'right',
                      color: '#888'
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      type: "button",
                      className: "edit-button",
                      style: {
                        "float": 'right',
                        color: '#888'
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                        icon: _freeSolidSvgIcons.faTrash,
                        className: "mr-1",
                        title: (0, _reactIntl.useIntl)().formatMessage({
                          id: 'bank.account.delete',
                          defaultMessage: 'Delete account'
                        })
                      })
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "iban[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'iban',
                    defaultMessage: 'IBAN'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-iban"],
                  value: account.iban,
                  field: "iban"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  id: "bic[" + i + "]",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'bic.swift',
                    defaultMessage: 'BIC/SWIFT'
                  }),
                  type: "text",
                  onChange: function onChange(e) {
                    return handdleChangeAccount(e, i, countryId);
                  },
                  error: errors["account-" + countryId + "-indx-" + i + "-field-bic"],
                  value: account.bic,
                  field: "bic"
                })]
              })
            }, i);
          });
      }
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      className: "bank-account",
      "data-testid": "no-national-accounts",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "box text-center no-bank-accounts",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "bank.account.empty",
          defaultMessage: "There are no bank accounts, please add."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          extraClass: "dark",
          onClick: handleAddAccount,
          text: (0, _reactIntl.useIntl)().formatMessage({
            id: 'bank.account.add',
            defaultMessage: 'Add account'
          }),
          dataTestId: "add-bank-account"
        })]
      })
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      className: "bank-account",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          style: {
            color: color
          },
          "data-testid": "account-title",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "bank.account.subtitle",
            defaultMessage: "Bank accounts"
          })
        })
      }), renderAccounts(bankAccounts), !(0, _utils.isEmpty)(bankAccounts[countryId] || []) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: cols,
        className: "text-center mb-5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "add-account",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
              extraClass: "dark",
              onClick: handleAddAccount,
              text: (0, _reactIntl.useIntl)().formatMessage({
                id: 'bank.account.add',
                defaultMessage: 'Add account'
              }),
              dataTestId: "add-bank-account"
            })
          })
        })
      })]
    }), (countryId === 150 || countryId === 231) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      className: "bank-account",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          style: {
            color: color
          },
          "data-testid": "international-account-title",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "bank.account.international",
            defaultMessage: "International bank accounts"
          })
        })
      }), renderInternacionalAccounts(bankAccounts), !(0, _utils.isEmpty)(bankAccounts[1] || []) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: cols,
        className: "text-right mb-5",
        "data-testid": "account-box",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "add-account",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
              extraClass: "dark",
              onClick: handleAddIntenationalAccount,
              text: (0, _reactIntl.useIntl)().formatMessage({
                id: 'bank.account.add.international',
                defaultMessage: 'Add international account'
              }),
              dataTestId: "add-international-bank-account"
            })
          })
        })
      })]
    }), !hideSaveButton && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "text-right",
        "data-testid": "submit-button",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          extraClass: "success-full",
          onClick: handleSubmit,
          text: (0, _reactIntl.useIntl)().formatMessage({
            id: 'bank.account.save',
            defaultMessage: 'Save'
          })
        })
      })]
    })]
  });
};

BankAccount.propTypes = process.env.NODE_ENV !== "production" ? {
  countryId: _propTypes["default"].number.isRequired,
  userBankTransfer: _propTypes["default"].object,
  bankTransfer: _propTypes["default"].object,
  color: _propTypes["default"].string,
  postBankTransfer: _propTypes["default"].func.isRequired,
  updateLocalstorage: _propTypes["default"].func.isRequired,
  userId: _propTypes["default"].number.isRequired,
  saveBankAccount: _propTypes["default"].bool,
  hideSaveButton: _propTypes["default"].bool,
  cols: _propTypes["default"].number,
  bankAccountSubmitReset: _propTypes["default"].func,
  checkIsValidBankAccount: _propTypes["default"].func
} : {};
BankAccount.defaultProps = {
  cols: 4,
  checkIsValidBankAccount: function checkIsValidBankAccount() {}
};
var _default = BankAccount;
exports["default"] = _default;
module.exports = exports.default;