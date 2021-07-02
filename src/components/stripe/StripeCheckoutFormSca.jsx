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
import isEmpty from '../../utils/isEmpty';
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
      color: '#FF494C',
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
  const text = () => btnText || <FormattedMessage id="checkout.payment.pay" defaultMessage="Pay" />;

  return (
    <Row className="checkout">
      <Col sm={12}>
        <label className={!isEmpty(errors) ? 'error' : ''}>
          <FormattedMessage id="checkout.payment.cardnumber" defaultMessage="Card number" />
          <CardNumberElement {...createOptions()} onChange={handleChange} />
        </label>
      </Col>
      <Col sm={6}>
        <label className={!isEmpty(errors) ? 'error' : ''}>
          <FormattedMessage id="checkout.payment.expiration" defaultMessage="Expiration date" />
          <CardExpiryElement {...createOptions()} onChange={handleChange} />
        </label>
      </Col>
      <Col sm={6}>
        <label className={!isEmpty(errors) ? 'error' : ''}>
          <FormattedMessage id="checkout.payment.cvc" defaultMessage="CVC" />
          <CardCVCElement {...createOptions()} onChange={handleChange} />
        </label>
      </Col>
      <Col sm={12} className="text-right">
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
