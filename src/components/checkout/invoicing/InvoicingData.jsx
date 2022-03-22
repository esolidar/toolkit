/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import TextareaField from '../../../elements/textareaField';
import CheckboxField from '../../../elements/checkboxField';
import TextField from '../../../elements/textField';

const InvoicingData = ({ state, onChangCheckBoxInvoicing, onChange }) => {
  const { errors, receipt, nif, invoice_address, agree } = state;

  const intl = useIntl();

  return (
    <Row className="cart-item-invoice">
      <Col sm={12} className="mb-2">
        <CheckboxField
          label={intl.formatMessage({ id: 'checkout.receipt' })}
          name="receipt"
          checked={receipt === 1}
          value={receipt}
          onChange={onChangCheckBoxInvoicing}
        />
      </Col>
      <Col sm={12}>
        <TextField
          label={intl.formatMessage({ id: 'user.nif' })}
          onChange={onChange}
          error={errors.nif}
          value={nif}
          field="nif"
          disabled={receipt !== 1}
        />
      </Col>
      <Col sm={12}>
        <TextareaField
          label={intl.formatMessage({ id: 'checkout.invoice_address' })}
          onChange={onChange}
          error={errors.invoice_address}
          value={invoice_address}
          field="invoice_address"
          disabled={receipt !== 1}
        />
      </Col>
      <Col sm={12}>
        <CheckboxField
          label={
            <>
              <FormattedMessage id="crowdfunding.donation.modal.agree.text" />
              &nbsp;
              <a href="/terms" target="_blank">
                <FormattedMessage id="crowdfunding.donation.modal.agree.href" />
              </a>
            </>
          }
          name="agree"
          value={agree}
          onChange={onChangCheckBoxInvoicing}
          checked={agree === 1}
          error={errors.agree}
        />
      </Col>
    </Row>
  );
};

InvoicingData.propTypes = {
  onChange: PropTypes.func,
  onChangCheckBoxInvoicing: PropTypes.func,
  state: PropTypes.object,
};

export default InvoicingData;
