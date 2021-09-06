/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements';
import variables from '../../assets/sass/_export.module.scss';
import Button from '../../elements/button';

const createOptions = () => ({
  style: {
    base: {
      fontSize: '16px',
      color: variables['main-text-colors-dark'],
      letterSpacing: '0.025em',
      padding: '0 10px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: variables['negative-_500'],
    },
  },
});

const StripeCheckoutFormSca = ({
  errors,
  handleChange,
  submit,
  stripe,
  elements,
  disableButton,
  btnText,
}) => {
  const text = () => btnText || <FormattedMessage id="checkout.payment.pay" />;

  return (
    <Row className="checkout">
      <Col sm={12} className={errors.cardnumber ? 'has-error' : ''}>
        <label className={errors.cardnumber ? 'error' : ''}>
          <FormattedMessage id="checkout.payment.cardnumber" />
          <CardNumberElement {...createOptions()} onChange={e => handleChange(e, 'cardnumber')} />
        </label>
        {!!errors.cardnumber && (
          <span className="help-block">
            {errors.cardnumber?.invalid_number}
            {errors.cardnumber?.incomplete_number}
          </span>
        )}
      </Col>
      <Col sm={6} className={errors.expiration ? 'has-error' : ''}>
        <label className={errors.expiration ? 'error' : ''}>
          <FormattedMessage id="checkout.payment.expiration" />
          <CardExpiryElement {...createOptions()} onChange={e => handleChange(e, 'expiration')} />
        </label>
        {!!errors.expiration && (
          <span className="help-block">
            {errors.expiration?.incomplete_expiry}
            {errors.expiration?.invalid_expiry_month_past}
            {errors.expiration?.invalid_expiry_year_past}
          </span>
        )}
      </Col>
      <Col sm={6} className={errors.cvc ? 'has-error' : ''}>
        <label className={errors.cvc ? 'error' : ''}>
          <FormattedMessage id="checkout.payment.cvc" />
          <CardCVCElement {...createOptions()} onChange={e => handleChange(e, 'cvc')} />
        </label>
        {!!errors.cvc && <span className="help-block">{errors.cvc?.incomplete_cvc}</span>}
      </Col>
      <Col sm={12} className="text-right mt-3">
        <Button
          disabled={disableButton}
          extraClass="success-full"
          onClick={() => submit(stripe, elements)}
          text={text()}
        />
      </Col>
    </Row>
  );
};

StripeCheckoutFormSca.propTypes = {
  elements: PropTypes.any,
  errors: PropTypes.any,
  handleChange: PropTypes.any,
  stripe: PropTypes.any,
  submit: PropTypes.func,
  disableButton: PropTypes.bool,
  btnText: PropTypes.string,
};

export default injectStripe(StripeCheckoutFormSca);
