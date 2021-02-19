/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import TextareaField from '../../../elements/textareaField';
import TextField from '../../../elements/textField';

const InvoicingData = props => {
  const { errors, receipt, nif, invoice_address, agree } = props.state;

  return (
    <Row className="cart-item-invoice">
      <Col sm={12}>
        <div className="checkbox-inline">
          <div className="form-group">
            <label htmlFor="receipt">
              <FormattedMessage
                id="checkout.receipt"
                defaultMessage="Do you want a donation receipt?"
              />
              <input
                type="checkbox"
                name="receipt"
                id="receipt"
                value={receipt}
                onChange={props.onChangCheckBoxInvoicing}
                checked={receipt === 1}
              />
              <div className="checkbox" />
            </label>
          </div>
        </div>
      </Col>
      <Col sm={12}>
        <TextField
          label={props.translateMessage({ id: 'user.nif', defaultMessage: 'VAT' })}
          onChange={props.onChange}
          error={errors.nif}
          value={nif}
          field="nif"
          disabled={receipt !== 1}
        />
      </Col>
      <Col sm={12}>
        <TextareaField
          label={props.translateMessage({
            id: 'checkout.invoice_address',
            defaultMessage: 'Invoicing address',
          })}
          onChange={props.onChange}
          error={errors.invoice_address}
          value={invoice_address}
          field="invoice_address"
          disabled={receipt !== 1}
        />
      </Col>
      <Col sm={12}>
        <div className="checkbox-inline">
          <div className="form-group">
            <label htmlFor="agree">
              <FormattedMessage
                id="crowdfunding.donation.modal.agree.text"
                defaultMessage="I have read and agree with the"
              />
              &nbsp;
              <a href="/terms" target="_blank">
                <FormattedMessage
                  id="crowdfunding.donation.modal.agree.href"
                  defaultMessage="terms and conditions"
                />
              </a>
              <input
                type="checkbox"
                name="agree"
                id="agree"
                value={agree}
                onChange={props.onChangCheckBoxInvoicing}
                checked={agree === 1}
              />
              <div className="checkbox" />
            </label>
            {errors.agree && (
              <div className="has-error">
                <span className="help-block">{errors.agree}</span>
              </div>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

InvoicingData.propTypes = {
  onChange: PropTypes.func,
  onChangCheckBoxInvoicing: PropTypes.func,
  state: PropTypes.object,
  translateMessage: PropTypes.func.isRequired,
};

export default InvoicingData;
