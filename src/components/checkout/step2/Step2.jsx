/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import Loading from '../../loading';
import Button from '../../../elements/button';
import InvoicingData from '../invoicing/InvoicingData';

const Step2 = props => {
  const intl = useIntl();

  return (
    <div>
      {props.state.isLoadingPayment && (
        <div className="loading-payment">
          <Loading message={intl.formatMessage({ id: 'payment.loader.wait' })} />
        </div>
      )}
      <Col sm={12}>
        <h2>
          <FormattedMessage id="checkout.invoicing.title" />
        </h2>
        <Row className="box">
          <InvoicingData
            onChangCheckBoxInvoicing={props.onChangCheckBoxInvoicing}
            onChangCheckBox={props.onChangCheckBox}
            onChange={props.onChange}
            state={props.state}
          />
        </Row>
        <Row className="box box-mobile-padding">
          <Col sm={12}>
            <Row>
              <Col sm={6}>
                <Button
                  extraClass="dark btn-prev-step"
                  onClick={() => props.nextStep(0)}
                  text={intl.formatMessage({ id: 'crowdfunding.donation.checkout.prev' })}
                />
              </Col>
              <Col sm={6} className="text-right">
                <Button
                  extraClass="success-full btn-next-step"
                  onClick={() => props.nextStep(2)}
                  text={intl.formatMessage({ id: 'crowdfunding.donation.checkout.next' })}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

Step2.propTypes = {
  onChangCheckBoxInvoicing: PropTypes.func,
  onChangCheckBox: PropTypes.func,
  onChange: PropTypes.func,
  nextStep: PropTypes.func,
  state: PropTypes.shape({
    isLoadingPayment: PropTypes.bool,
  }),
};

export default Step2;
