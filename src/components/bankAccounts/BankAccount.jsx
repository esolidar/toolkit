import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import IBAN from 'iban';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import TextField from '../../elements/textField';
import ConfirmModal from '../../elements/confirmModal';
import Button from '../../elements/button';
import { isEmpty } from '../../utils';

const DeleteButton = ({ handleDeleteClick, idx }) => {
  const intl = useIntl();

  return (
    <button
      type="button"
      className="edit-button"
      style={{ float: 'right', color: '#888' }}
      onClick={() => handleDeleteClick(idx)}
    >
      <FontAwesomeIcon
        icon={faTrash}
        className="mr-1"
        title={intl.formatMessage({ id: 'bank.account.delete' })}
      />
    </button>
  );
};

const BankAccount = ({
  countryId,
  userBankTransfer,
  color,
  postBankTransfer,
  userId,
  bankTransfer,
  updateLocalstorage,
  saveBankAccount,
  hideSaveButton,
  bankAccountSubmitReset,
  cols,
  checkIsValidBankAccount,
}) => {
  const [errors, setErrors] = useState({});
  const [bankAccounts, setBankAccounts] = useState(userBankTransfer || {});

  const intl = useIntl();

  useEffect(() => {
    if (bankTransfer && bankTransfer.code === 200) {
      updateLocalstorage(bankAccounts);
    }
  }, [bankTransfer]);

  const handdleChangeAccount = (e, i, countryId) => {
    const { name, value } = e.target;
    const form = { ...bankAccounts };
    form[countryId][i][name] = value;
    setBankAccounts(form);
  };

  const handleDeleteInternationalAccount = i => {
    const newAccounts = bankAccounts[1];
    newAccounts.splice(i, 1);
    setBankAccounts(prevState => ({ ...prevState, 1: newAccounts }));
  };

  const handleDeleteAccount = i => {
    const newAccounts = bankAccounts[countryId];
    newAccounts.splice(i, 1);
    setBankAccounts(prevState => ({ ...prevState, [countryId]: newAccounts }));
  };

  const isValid = (typeAccount, isButtonAddAccount = false) => {
    setErrors({});
    let isValid = true;

    if (isEmpty(bankAccounts)) {
      return false;
    }

    Object.keys(bankAccounts).map(key => {
      const isNational = typeAccount === 'national' && key !== '1';
      const isRestOfWorld = typeAccount === 'restOfWorld' && key === '1';
      const isInternational = typeAccount === 'international' && key === '1';

      if (isNational || isRestOfWorld || isInternational || !typeAccount) {
        const value = bankAccounts[key];
        value.map((item, i) => {
          Object.keys(item).map(formKey => {
            const formValue = item[formKey];

            if (formKey === 'iban' && !IBAN.isValid(formValue)) {
              setErrors(prevState => ({
                ...prevState,
                [`account-${key}-indx-${i}-field-${formKey}`]: intl.formatMessage({
                  id: 'iban.invalid',
                }),
              }));
              isValid = false;
            }

            if (formKey === 'iban' && IBAN.isValid(formValue)) {
              setErrors(prevState => ({
                ...prevState,
                [`account-${key}-indx-${i}-field-iban`]: '',
              }));
            }

            if (formValue === '') {
              setErrors(prevState => ({
                ...prevState,
                [`account-${key}-indx-${i}-field-${formKey}`]: intl.formatMessage({
                  id: 'required',
                }),
              }));
              isValid = false;
            }
          });
        });
      }
    });
    if (!isButtonAddAccount) checkIsValidBankAccount(isValid);
    return isValid;
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

    let typeAccount = 'national';
    if (countryId === 1) typeAccount = 'restOfWorld';

    if (isEmpty(newAccounts) || isValid(typeAccount, true)) {
      newAccounts.push(account);
      setBankAccounts(prevState => ({ ...prevState, [countryId]: newAccounts }));
    }
  };

  const handleAddInternationalAccount = () => {
    const newAccounts = bankAccounts[1] || [];
    if (isEmpty(newAccounts) || isValid('international', true)) {
      newAccounts.push({
        iban: '',
        bic: '',
      });
      setBankAccounts(prevState => ({ ...prevState, 1: newAccounts }));
    }
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

  useEffect(() => {
    if (saveBankAccount) {
      handleSubmit();
      bankAccountSubmitReset();
    }
  }, [saveBankAccount]);

  const renderInternacionalAccounts = accounts => {
    if (!isEmpty(accounts) && !isEmpty(accounts[1] || [])) {
      return accounts[1].map((account, i) => {
        const isEmptyFieldsInternationalAccount = account.iban === '' && account.bic === '';

        return (
          <Col
            sm={cols}
            key={i}
            className={errors[`account[${i}]`] ? 'has-error mb-5' : 'mb-5'}
            data-testid={`international-accounts-${i}`}
          >
            <Row>
              <Col sm={12}>
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage
                      id="bank.account.international.value"
                      values={{ value: i + 1 }}
                    />
                    {isEmptyFieldsInternationalAccount && (
                      <DeleteButton
                        handleDeleteClick={handleDeleteInternationalAccount}
                        dataTestId={`btn-delete-national-account-${i}`}
                        idx={i}
                      />
                    )}
                    {!isEmptyFieldsInternationalAccount && (
                      <ConfirmModal
                        onConfirm={() => handleDeleteInternationalAccount(i)}
                        title={intl.formatMessage({ id: 'bank.account.delete.title' })}
                        body={intl.formatMessage({ id: 'bank.account.delete.body' })}
                        confirmText={intl.formatMessage({ id: 'delete' })}
                        cancelText={intl.formatMessage({ id: 'cancel' })}
                        style={{ float: 'right', color: '#888' }}
                      >
                        <button
                          type="button"
                          className="edit-button"
                          style={{ float: 'right', color: '#888' }}
                          data-testid={`btn-delete-international-account-${i}`}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="mr-1"
                            title={intl.formatMessage({ id: 'bank.account.delete' })}
                          />
                        </button>
                      </ConfirmModal>
                    )}
                  </h4>
                  <TextField
                    id={`iban[${i}]`}
                    label={intl.formatMessage({ id: 'iban' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, 1)}
                    error={errors[`account-1-indx-${i}-field-iban`]}
                    value={account.iban}
                    field="iban"
                  />
                  <TextField
                    id={`bic[${i}]`}
                    label={intl.formatMessage({ id: 'bic.swift' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, 1)}
                    error={errors[`account-1-indx-${i}-field-bic`]}
                    value={account.bic}
                    field="bic"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        );
      });
    }

    return (
      <Col sm={12} className="bank-account" data-testid="no-international-accounts">
        <div className="box text-center no-bank-accounts">
          <FormattedMessage id="bank.account.empty.international" />
          <br />
          <br />
          <Button
            extraClass="dark"
            onClick={handleAddInternationalAccount}
            text={intl.formatMessage({ id: 'bank.account.add.international' })}
            dataTestId="add-international-bank-account"
          />
        </div>
      </Col>
    );
  };

  const renderAccounts = accounts => {
    if (!isEmpty(accounts) && !isEmpty(accounts[countryId] || [])) {
      switch (countryId) {
        case 150: // Brasil
          return bankAccounts[countryId].map((account, i) => {
            const isEmptyFieldsBrasilAccount =
              account.bank_number === '' &&
              account.beneficiary === '' &&
              account.cnpj === '' &&
              account.bank_branch === '' &&
              account.bank_checking_account === '';
            return (
              <Col
                sm={cols}
                key={i}
                className={errors[`account[${i}]`] ? 'has-error mb-5' : 'mb-5'}
                data-testid={`national-accounts-${i}`}
              >
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage id="bank.account" values={{ value: i + 1 }} />
                    {isEmptyFieldsBrasilAccount && i > 0 && (
                      <DeleteButton handleDeleteClick={handleDeleteAccount} idx={i} />
                    )}
                    {!isEmptyFieldsBrasilAccount && i > 0 && (
                      <ConfirmModal
                        onConfirm={() => handleDeleteAccount(i)}
                        title={intl.formatMessage({ id: 'bank.account.delete.title' })}
                        body={intl.formatMessage({ id: 'bank.account.delete.body' })}
                        confirmText={intl.formatMessage({ id: 'delete' })}
                        cancelText={intl.formatMessage({ id: 'cancel' })}
                        style={{ float: 'right', color: '#888' }}
                      >
                        <button
                          type="button"
                          className="edit-button"
                          style={{ float: 'right', color: '#888' }}
                          data-testid={`btn-delete-national-account-${i}`}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="mr-1"
                            title={intl.formatMessage({ id: 'bank.account.delete' })}
                          />
                        </button>
                      </ConfirmModal>
                    )}
                  </h4>
                  <TextField
                    id={`bank_number[${i}]`}
                    label={intl.formatMessage({ id: 'bank.account.field' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bank_number`]}
                    value={account.bank_number}
                    field="bank_number"
                    dataTestId="bankNumber"
                  />
                  <TextField
                    id={`beneficiary[${i}]`}
                    label={intl.formatMessage({ id: 'auction.beneficiary' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-beneficiary`]}
                    value={account.beneficiary}
                    field="beneficiary"
                    dataTestId="beneficiary"
                  />
                  <TextField
                    id={`cnpj[${i}]`}
                    label={intl.formatMessage({ id: 'user.nif' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-cnpj`]}
                    value={account.cnpj}
                    field="cnpj"
                    dataTestId="cnpj"
                  />
                  <TextField
                    id={`bank_branch[${i}]`}
                    label={intl.formatMessage({ id: 'bank.account.bank_branch' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bank_branch`]}
                    value={account.bank_branch}
                    field="bank_branch"
                    dataTestId="bank_branch"
                  />
                  <TextField
                    id={`bank_checking_account[${i}]`}
                    label={intl.formatMessage({ id: 'bank.account.bank_checking_account' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bank_checking_account`]}
                    value={account.bank_checking_account}
                    field="bank_checking_account"
                    dataTestId="bank_checking_account"
                  />
                </div>
              </Col>
            );
          });

        case 208: // Portugal
          return bankAccounts[countryId].map((account, i) => {
            const isEmptyFieldsPortugalAccount =
              account.iban === '' && account.nib === '' && account.bic === '';
            return (
              <Col
                sm={cols}
                key={i}
                className={errors[`account[${i}]`] ? 'has-error mb-5' : 'mb-5'}
                data-testid={`national-accounts-${i}`}
              >
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage id="bank.account" values={{ value: i + 1 }} />
                    {isEmptyFieldsPortugalAccount && i > 0 && (
                      <DeleteButton handleDeleteClick={handleDeleteAccount} idx={i} />
                    )}
                    {!isEmptyFieldsPortugalAccount && i > 0 && (
                      <ConfirmModal
                        onConfirm={() => handleDeleteAccount(i)}
                        title={intl.formatMessage({ id: 'bank.account.delete.title' })}
                        body={intl.formatMessage({ id: 'bank.account.delete.body' })}
                        confirmText={intl.formatMessage({ id: 'delete' })}
                        cancelText={intl.formatMessage({ id: 'cancel' })}
                        style={{ float: 'right', color: '#888' }}
                      >
                        <button
                          type="button"
                          className="edit-button"
                          style={{ float: 'right', color: '#888' }}
                          data-testid={`btn-delete-national-account-${i}`}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="mr-1"
                            title={intl.formatMessage({ id: 'bank.account.delete' })}
                          />
                        </button>
                      </ConfirmModal>
                    )}
                  </h4>
                  <TextField
                    id={`iban[${i}]`}
                    label={intl.formatMessage({ id: 'iban' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-iban`]}
                    value={account.iban}
                    field="iban"
                    dataTestId="iban"
                  />
                  <TextField
                    id={`nib[${i}]`}
                    label={intl.formatMessage({ id: 'nib' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-nib`]}
                    value={account.nib}
                    field="nib"
                    dataTestId="nib"
                  />
                  <TextField
                    id={`bic[${i}]`}
                    label={intl.formatMessage({ id: 'bic.swift' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bic`]}
                    value={account.bic}
                    field="bic"
                    dataTestId="bic"
                  />
                </div>
              </Col>
            );
          });

        case 231: // United Kingdom
          return bankAccounts[countryId].map((account, i) => {
            const isEmptyFieldsUkAccount =
              account.accountholder === '' &&
              account.banksortcode === '' &&
              account.accountnumber === '';
            return (
              <Col
                sm={cols}
                key={i}
                className={errors[`account[${i}]`] ? 'has-error mb-5' : 'mb-5'}
                data-testid={`national-accounts-${i}`}
              >
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage id="bank.account" values={{ value: i + 1 }} />
                    {isEmptyFieldsUkAccount && i > 0 && (
                      <DeleteButton handleDeleteClick={handleDeleteAccount} idx={i} />
                    )}
                    {!isEmptyFieldsUkAccount && i > 0 && (
                      <ConfirmModal
                        onConfirm={() => handleDeleteAccount(i)}
                        title={intl.formatMessage({ id: 'bank.account.delete.title' })}
                        body={intl.formatMessage({ id: 'bank.account.delete.body' })}
                        confirmText={intl.formatMessage({ id: 'delete' })}
                        cancelText={intl.formatMessage({ id: 'cancel' })}
                        style={{ float: 'right', color: '#888' }}
                      >
                        <button
                          type="button"
                          className="edit-button"
                          style={{ float: 'right', color: '#888' }}
                          data-testid={`btn-delete-national-account-${i}`}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="mr-1"
                            title={intl.formatMessage({ id: 'bank.account.delete' })}
                          />
                        </button>
                      </ConfirmModal>
                    )}
                  </h4>
                  <TextField
                    id={`accountholder[${i}]`}
                    label={intl.formatMessage({ id: 'accountholder' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-accountholder`]}
                    value={account.accountholder}
                    field="accountholder"
                    dataTestId="accountholder"
                  />
                  <TextField
                    id={`banksortcode[${i}]`}
                    label={intl.formatMessage({ id: 'banksortcode' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-banksortcode`]}
                    value={account.banksortcode}
                    field="banksortcode"
                    dataTestId="banksortcode"
                  />
                  <TextField
                    id={`accountnumber[${i}]`}
                    label={intl.formatMessage({ id: 'accountnumber' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-accountnumber`]}
                    value={account.accountnumber}
                    field="accountnumber"
                    dataTestId="accountnumber"
                  />
                </div>
              </Col>
            );
          });

        default:
          // Rest of the world
          return bankAccounts[countryId].map((account, i) => {
            const isEmptyFieldsRestWorldAccount = account.iban === '' && account.bic === '';

            return (
              <Col
                sm={cols}
                key={i}
                className={errors[`account[${i}]`] ? 'has-error mb-5' : 'mb-5'}
                data-testid={`national-accounts-${i}`}
              >
                <div className="box">
                  <h4 style={{ color }}>
                    <FormattedMessage id="bank.account" values={{ value: i + 1 }} />
                    {isEmptyFieldsRestWorldAccount && i > 0 && (
                      <DeleteButton handleDeleteClick={handleDeleteAccount} idx={i} />
                    )}
                    {!isEmptyFieldsRestWorldAccount && i > 0 && (
                      <ConfirmModal
                        onConfirm={() => handleDeleteAccount(i)}
                        title={intl.formatMessage({ id: 'bank.account.delete.title' })}
                        body={intl.formatMessage({ id: 'bank.account.delete.body' })}
                        confirmText={intl.formatMessage({ id: 'delete' })}
                        cancelText={intl.formatMessage({ id: 'cancel' })}
                        style={{ float: 'right', color: '#888' }}
                      >
                        <button
                          type="button"
                          className="edit-button"
                          style={{ float: 'right', color: '#888' }}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="mr-1"
                            title={intl.formatMessage({ id: 'bank.account.delete' })}
                          />
                        </button>
                      </ConfirmModal>
                    )}
                  </h4>
                  <TextField
                    id={`iban[${i}]`}
                    label={intl.formatMessage({ id: 'iban' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-iban`]}
                    value={account.iban}
                    field="iban"
                  />
                  <TextField
                    id={`bic[${i}]`}
                    label={intl.formatMessage({ id: 'bic.swift' })}
                    type="text"
                    onChange={e => handdleChangeAccount(e, i, countryId)}
                    error={errors[`account-${countryId}-indx-${i}-field-bic`]}
                    value={account.bic}
                    field="bic"
                  />
                </div>
              </Col>
            );
          });
      }
    }
    return (
      <Col sm={12} className="bank-account" data-testid="no-national-accounts">
        <div className="box no-bank-accounts d-flex align-items-center flex-column">
          <div>
            <FormattedMessage id="bank.account.empty" />
          </div>
          <br />
          <br />
          <Button
            extraClass="dark"
            onClick={handleAddAccount}
            text={intl.formatMessage({ id: 'bank.account.add' })}
            dataTestId="add-bank-account"
          />
        </div>
      </Col>
    );
  };

  return (
    <>
      <Row className="bank-account">
        <Col sm={12}>
          <h3 style={{ color }} data-testid="account-title">
            <FormattedMessage id="bank.account.subtitle" />
          </h3>
        </Col>
        {renderAccounts(bankAccounts)}
        {!isEmpty(bankAccounts[countryId] || []) && (
          <Col sm={cols} className="text-center mb-5">
            <div className="box">
              <div className="add-account">
                <Button
                  extraClass="dark"
                  onClick={handleAddAccount}
                  text={intl.formatMessage({ id: 'bank.account.add' })}
                  dataTestId="add-bank-account"
                />
              </div>
            </div>
          </Col>
        )}
      </Row>
      {(countryId === 150 || countryId === 231) && (
        <Row className="bank-account">
          <Col sm={12}>
            <h3 style={{ color }} data-testid="international-account-title">
              <FormattedMessage id="bank.account.international" />
            </h3>
          </Col>
          {renderInternacionalAccounts(bankAccounts)}
          {!isEmpty(bankAccounts[1] || []) && (
            <Col sm={cols} className="text-right mb-5" data-testid="account-box">
              <div className="box">
                <div className="add-account">
                  <Button
                    extraClass="dark"
                    onClick={handleAddInternationalAccount}
                    text={intl.formatMessage({ id: 'bank.account.add.international' })}
                    dataTestId="add-international-bank-account"
                  />
                </div>
              </div>
            </Col>
          )}
        </Row>
      )}
      {!hideSaveButton && (
        <Row>
          <Col sm={12}>
            <hr />
          </Col>
          <Col sm={12} className="d-flex justify-content-end" data-testid="submit-button">
            <Button
              extraClass="success-full"
              onClick={handleSubmit}
              text={intl.formatMessage({ id: 'save' })}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

BankAccount.propTypes = {
  countryId: PropTypes.number.isRequired,
  userBankTransfer: PropTypes.object,
  bankTransfer: PropTypes.object,
  color: PropTypes.string,
  postBankTransfer: PropTypes.func.isRequired,
  updateLocalstorage: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  saveBankAccount: PropTypes.bool,
  hideSaveButton: PropTypes.bool,
  cols: PropTypes.number,
  bankAccountSubmitReset: PropTypes.func,
  checkIsValidBankAccount: PropTypes.func,
};

DeleteButton.propTypes = {
  handleDeleteClick: PropTypes.func,
  idx: PropTypes.number,
};

BankAccount.defaultProps = {
  cols: 4,
  checkIsValidBankAccount: () => {},
};

export default BankAccount;
