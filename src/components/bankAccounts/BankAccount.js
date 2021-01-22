import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import IBAN from 'iban';
import {
  Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import TextField from '../../elements/textField/TextField';
import ConfirmModal from '../../elements/confirmModal/ConfirmModal';
import Button from '../button/Button';
import { isEmpty } from '../../utils';

const BankAccount = ({
  intl,
  countryId,
  bankTransfer,
  color,
  postBankTransfer,
  userId,
}) => {
  const [errors, setErrors] = useState({});
  const [bankAccounts, setBankAccounts] = useState(bankTransfer || {});

  const handdleChangeAccount = (e, i, countryId) => {
    const { name, value } = e.target;
    const form = { ...bankAccounts };
    form[countryId][i][name] = value;
    setBankAccounts(form);
  };

  const handleAddIntenationalAccount = () => {
    const newAccounts = bankAccounts[1] || [];
    newAccounts.push({
      iban: '',
      bic: '',
    });
    setBankAccounts((prevState) => ({ ...prevState, 1: newAccounts }));
  };

  const handleAddAccount = () => {
    const newAccounts = bankAccounts[countryId] || [];
    let account = {};
    switch (countryId) {
      case 150:
        account = {
          bank_branch: '',
          bank_checking_account: '',
          bank_number: '',
          beneficiary: '',
          cnpj: '',
        };
        break;

      case 231:
        account = {
          accountholder: '',
          banksortcode: '',
          accountnumber: '',
        };
        break;

      case 208:
        account = {
          iban: '',
          nib: '',
          bic: '',
        };
        break;

      default:
        account = {
          iban: '',
          bic: '',
        };
    }
    newAccounts.push(account);
    setBankAccounts((prevState) => ({ ...prevState, [countryId]: newAccounts }));
  };

  const handleDeleteInternationalAccount = (i) => {
    const newAccounts = bankAccounts[1];
    newAccounts.splice(i, 1);
    setBankAccounts((prevState) => ({ ...prevState, 1: newAccounts }));
  };

  const handleDeleteAccount = (i) => {
    const newAccounts = bankAccounts[countryId];
    newAccounts.splice(i, 1);
    setBankAccounts((prevState) => ({ ...prevState, [countryId]: newAccounts }));
  };

  const isValid = () => {
    setErrors({});
    let isValid = true;
    Object.keys(bankAccounts).map((key) => {
      const value = bankAccounts[key];
      value.map((item, i) => {
        Object.keys(item).map((formKey) => {
          const formValue = item[formKey];

          if (formKey === 'iban' && !IBAN.isValid(formValue)) {
            setErrors((prevState) => ({ ...prevState, [`account-${key}-indx-${i}-field-${formKey}`]: intl.formatMessage({ id: 'iban.invalid', defaultMessage: 'This IBAN is invalid' }) }));
            isValid = false;
          }

          if (formKey === 'iban' && IBAN.isValid(formValue)) {
            setErrors((prevState) => ({ ...prevState, [`account-${key}-indx-${i}-field-iban`]: '' }));
          }

          if (formValue === '') {
            setErrors((prevState) => ({ ...prevState, [`account-${key}-indx-${i}-field-${formKey}`]: intl.formatMessage({ id: 'required', defaultMessage: 'This field is required' }) }));
            isValid = false;
          }
        });
      });
    });
    return isValid;
  };

  const handleSubmit = () => {
    if (isValid()) {
      setErrors({});
      const data = {
        bank_transfer: JSON.stringify(bankAccounts),
      };
      postBankTransfer(userId, data);
    }
  };

  const renderInternacionalAccounts = (accounts) => {
    if (!isEmpty(accounts) && !isEmpty(accounts[1] || [])) {
      return (
        accounts[1].map((account, i) => (
          <Col sm={4} key={i} className={errors[`account[${i}]`] ? 'has-error' : ''}>
            <Row>
              <Col sm={12}>
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage
                      id="bank.account"
                      defaultMessage="International account #{value}"
                      values={{ value: i + 1 }}
                    />

                    <ConfirmModal
                      onConfirm={() => handleDeleteInternationalAccount(i)}
                      title={intl.formatMessage({ id: 'bank.account.international.delete.title', defaultMessage: 'Delete international account' })}
                      body={intl.formatMessage({ id: 'bank.account.delete.body', defaultMessage: 'Are you sure you want to delete this account?' })}
                      confirmText={intl.formatMessage({ id: 'confirm', defaultMessage: 'Confirm' })}
                      cancelText={intl.formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                      style={{ float: 'right', color: '#888' }}
                    >
                      <button type="button" className="edit-button">
                        <FontAwesomeIcon icon={faTrash} className="mr-1" title={intl.formatMessage({ id: 'bank.account.delete', defaultMessage: 'Delete account' })} />
                      </button>
                    </ConfirmModal>
                  </h4>
                  <TextField
                    id={`iban[${i}]`}
                    label={intl.formatMessage({ id: 'iban', defaultMessage: 'IBAN' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, 1)}
                    error={errors[`account-1-indx-${i}-field-iban`]}
                    value={account.iban}
                    field="iban"
                  />
                  <TextField
                    id={`bic[${i}]`}
                    label={intl.formatMessage({ id: 'bic.swift', defaultMessage: 'BIC/SWIFT' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, 1)}
                    error={errors[`account-1-indx-${i}-field-bic`]}
                    value={account.bic}
                    field="bic"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        ))
      );
    }

    return (
      <Col sm={12} className="bank-account">
        <div className="box text-center no-bank-accounts">
          <FormattedMessage
            id="bank.account.empty.international"
            defaultMessage="There are no international bank accounts, please add."
          />
        </div>
      </Col>
    );
  };

  const renderAccounts = (accounts) => {
    if (!isEmpty(accounts) && !isEmpty(accounts[countryId] || [])) {
      switch (countryId) {
        case 150: // Brasil
          return (
            bankAccounts[countryId].map((account, i) => (
              <Col sm={4} key={i} className={errors[`account[${i}]`] ? 'has-error' : ''}>
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage
                      id="bank.account"
                      defaultMessage="Account #{value}"
                      values={{ value: i + 1 }}
                    />
                    <ConfirmModal
                      onConfirm={() => handleDeleteAccount(i)}
                      title={intl.formatMessage({ id: 'bank.account.delete.title', defaultMessage: 'Delete account' })}
                      body={intl.formatMessage({ id: 'bank.account.delete.body', defaultMessage: 'Are you sure you want to delete this account?' })}
                      confirmText={intl.formatMessage({ id: 'confirm', defaultMessage: 'Confirm' })}
                      cancelText={intl.formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                      style={{ float: 'right', color: '#888' }}
                    >
                      <button type="button" className="edit-button" onClick={() => handleDeleteAccount(i)} style={{ float: 'right', color: '#888' }}>
                        <FontAwesomeIcon icon={faTrash} className="mr-1" title={intl.formatMessage({ id: 'bank.account.delete', defaultMessage: 'Delete account' })} />
                      </button>
                    </ConfirmModal>
                  </h4>
                  <TextField
                    id={`bank_number[${i}]`}
                    label={intl.formatMessage({ id: 'bank.account', defaultMessage: 'Account' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bank_number`]}
                    value={account.bank_number}
                    field="bank_number"
                  />
                  <TextField
                    id={`beneficiary[${i}]`}
                    label={intl.formatMessage({ id: 'bank.account.beneficiary', defaultMessage: 'Account holder' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-beneficiary`]}
                    value={account.beneficiary}
                    field="beneficiary"
                  />
                  <TextField
                    id={`cnpj[${i}]`}
                    label={intl.formatMessage({ id: 'bank.account.cnpj', defaultMessage: 'VAT' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-cnpj`]}
                    value={account.cnpj}
                    field="cnpj"
                  />
                  <TextField
                    id={`bank_branch[${i}]`}
                    label={intl.formatMessage({ id: 'bank.account.bank_branch', defaultMessage: 'Bank branch' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bank_branch`]}
                    value={account.bank_branch}
                    field="bank_branch"
                  />
                  <TextField
                    id={`bank_checking_account[${i}]`}
                    label={intl.formatMessage({ id: 'bank.account.bank_checking_account', defaultMessage: 'Current bank account' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bank_checking_account`]}
                    value={account.bank_checking_account}
                    field="bank_checking_account"
                  />
                </div>
              </Col>
            ))
          );

        case 208: // Portugal
          return (
            bankAccounts[countryId].map((account, i) => (
              <Col sm={4} key={i} className={errors[`account[${i}]`] ? 'has-error' : ''}>
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage
                      id="bank.account"
                      defaultMessage="Account #{value}"
                      values={{ value: i + 1 }}
                    />
                    <ConfirmModal
                      onConfirm={() => handleDeleteAccount(i)}
                      title={intl.formatMessage({ id: 'bank.account.delete.title', defaultMessage: 'Delete account' })}
                      body={intl.formatMessage({ id: 'bank.account.delete.body', defaultMessage: 'Are you sure you want to delete this account?' })}
                      confirmText={intl.formatMessage({ id: 'confirm', defaultMessage: 'Confirm' })}
                      cancelText={intl.formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                      style={{ float: 'right', color: '#888' }}
                    >
                      <button type="button" className="edit-button" onClick={() => handleDeleteAccount(i)} style={{ float: 'right', color: '#888' }}>
                        <FontAwesomeIcon icon={faTrash} className="mr-1" title={intl.formatMessage({ id: 'bank.account.delete', defaultMessage: 'Delete account' })} />
                      </button>
                    </ConfirmModal>
                  </h4>
                  <TextField
                    id={`iban[${i}]`}
                    label={intl.formatMessage({ id: 'iban', defaultMessage: 'IBAN' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-iban`]}
                    value={account.iban}
                    field="iban"
                  />
                  <TextField
                    id={`nib[${i}]`}
                    label={intl.formatMessage({ id: 'nib', defaultMessage: 'NIB' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-nib`]}
                    value={account.nib}
                    field="nib"
                  />
                  <TextField
                    id={`bic[${i}]`}
                    label={intl.formatMessage({ id: 'bic.swift', defaultMessage: 'BIC/SWIFT' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bic`]}
                    value={account.bic}
                    field="bic"
                  />
                </div>
              </Col>
            ))
          );

        case 231: // United Kingdom
          return (
            bankAccounts[countryId].map((account, i) => (
              <Col sm={4} key={i} className={errors[`account[${i}]`] ? 'has-error' : ''}>
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage
                      id="bank.account"
                      defaultMessage="Account #{value}"
                      values={{ value: i + 1 }}
                    />
                    <ConfirmModal
                      onConfirm={() => handleDeleteAccount(i)}
                      title={intl.formatMessage({ id: 'bank.account.delete.title', defaultMessage: 'Delete account' })}
                      body={intl.formatMessage({ id: 'bank.account.delete.body', defaultMessage: 'Are you sure you want to delete this account?' })}
                      confirmText={intl.formatMessage({ id: 'confirm', defaultMessage: 'Confirm' })}
                      cancelText={intl.formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                      style={{ float: 'right', color: '#888' }}
                    >
                      <button type="button" className="edit-button" onClick={() => handleDeleteAccount(i)} style={{ float: 'right', color: '#888' }}>
                        <FontAwesomeIcon icon={faTrash} className="mr-1" title={intl.formatMessage({ id: 'bank.account.delete', defaultMessage: 'Delete account' })} />
                      </button>
                    </ConfirmModal>
                  </h4>
                  <TextField
                    id={`accountholder[${i}]`}
                    label={intl.formatMessage({ id: 'accountholder', defaultMessage: 'Account holder' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-accountholder`]}
                    value={account.accountholder}
                    field="accountholder"
                  />
                  <TextField
                    id={`banksortcode[${i}]`}
                    label={intl.formatMessage({ id: 'banksortcode', defaultMessage: 'Bank sort code' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-banksortcode`]}
                    value={account.banksortcode}
                    field="banksortcode"
                  />
                  <TextField
                    id={`accountnumber[${i}]`}
                    label={intl.formatMessage({ id: 'accountnumber', defaultMessage: 'Account number' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-accountnumber`]}
                    value={account.accountnumber}
                    field="accountnumber"
                  />
                </div>
              </Col>
            ))
          );

        default: // Rest of the world
          return (
            bankAccounts[countryId].map((account, i) => (
              <Col sm={4} key={i} className={errors[`account[${i}]`] ? 'has-error' : ''}>
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage
                      id="bank.account"
                      defaultMessage="Account #{value}"
                      values={{ value: i + 1 }}
                    />
                    <ConfirmModal
                      onConfirm={() => handleDeleteAccount(i)}
                      title={intl.formatMessage({ id: 'bank.account.delete.title', defaultMessage: 'Delete account' })}
                      body={intl.formatMessage({ id: 'bank.account.delete.body', defaultMessage: 'Are you sure you want to delete this account?' })}
                      confirmText={intl.formatMessage({ id: 'confirm', defaultMessage: 'Confirm' })}
                      cancelText={intl.formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                      style={{ float: 'right', color: '#888' }}
                    >
                      <button type="button" className="edit-button" onClick={() => handleDeleteAccount(i)} style={{ float: 'right', color: '#888' }}>
                        <FontAwesomeIcon icon={faTrash} className="mr-1" title={intl.formatMessage({ id: 'bank.account.delete', defaultMessage: 'Delete account' })} />
                      </button>
                    </ConfirmModal>
                  </h4>
                  <TextField
                    id={`iban[${i}]`}
                    label={intl.formatMessage({ id: 'iban', defaultMessage: 'IBAN' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-iban`]}
                    value={account.iban}
                    field="iban"
                  />
                  <TextField
                    id={`bic[${i}]`}
                    label={intl.formatMessage({ id: 'bic.swift', defaultMessage: 'BIC/SWIFT' })}
                    type="text"
                    onChange={(e) => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bic`]}
                    value={account.bic}
                    field="bic"
                  />
                </div>
              </Col>
            ))
          );
      }
    }
    return (
      <Col sm={12} className="bank-account">
        <div className="box text-center no-bank-accounts">
          <FormattedMessage
            id="bank.account.empty"
            defaultMessage="There are no bank accounts, please add."
          />
        </div>
      </Col>
    );
  };

  return (
    <Row className="bank-account">
      <Col sm={12}>
        <h1 style={{ color }}>
          <FormattedMessage
            id="bank.account.title"
            defaultMessage="Bank accounts"
          />
        </h1>
      </Col>
      {renderInternacionalAccounts(bankAccounts)}
      <Col sm={12} className="text-right">
        <Button extraClass="dark" onClick={handleAddIntenationalAccount} text={intl.formatMessage({ id: 'bank.account.add.international', defaultMessage: 'Add international account' })} />
      </Col>
      <Col sm={12}>
        <hr />
      </Col>
      {renderAccounts(bankAccounts)}
      <Col sm={12} className="text-right">
        <Button extraClass="dark" onClick={handleAddAccount} text={intl.formatMessage({ id: 'bank.account.add.international', defaultMessage: 'Add account' })} />
      </Col>
      <Col sm={12}>
        <hr />
      </Col>
      <Col sm={12}>
        <Button extraClass="success-full" onClick={handleSubmit} text={intl.formatMessage({ id: 'bank.account.add.international', defaultMessage: 'Add account' })} />
      </Col>
    </Row>
  );
};

BankAccount.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  countryId: PropTypes.number,
  bankTransfer: PropTypes.object,
  color: PropTypes.string,
  postBankTransfer: PropTypes.func,
  userId: PropTypes.string,
};

export default injectIntl(BankAccount);
