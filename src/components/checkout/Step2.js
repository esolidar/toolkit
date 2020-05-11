/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Loading from '../loading/Loading';
import Button from '../button/Button';
import InvoicingData from './invoicing/InvoicingData';

const Step2 = (props) => (
  <div>
    {props.state.isLoadingPayment && (<div className="loading-payment"><Loading message={props.translateMessage({ id: 'payment.loader.wait', defaultMessage: 'Please wait.' })} /></div>)}
    <Col sm={12}>
      <h2>
        <FormattedMessage
          id="checkout.invoicing.title"
          defaultMessage="Invoicing information"
        />
      </h2>
      <Row className="box">
        <InvoicingData
          onChangCheckBoxInvoicing={props.onChangCheckBoxInvoicing}
          onChangCheckBox={props.onChangCheckBox}
          onChange={props.onChange}
          state={props.state}
          translateMessage={props.translateMessage}
        />
      </Row>
      <Row className="box box-mobile-padding">
        <Col sm={6}>
          <Button
            extraClass="dark btn-prev-step"
            onClick={() => props.nextStep(0)}
            text={props.translateMessage({
              id: 'crowdfunding.donation.checkout.prev',
              defaultMessage: 'Prev',
            })}
          />
        </Col>
        <Col sm={6} className="text-right">
          <Button
            extraClass="success-full btn-next-step"
            onClick={() => props.nextStep(2)}
            text={props.translateMessage({
              id: 'crowdfunding.donation.checkout.next',
              defaultMessage: 'Next',
            })}
          />
        </Col>
      </Row>
    </Col>
  </div>
);

Step2.propTypes = {
  onChangCheckBoxInvoicing: PropTypes.func,
  onChangCheckBox: PropTypes.func,
  onChange: PropTypes.func,
  nextStep: PropTypes.func,
  state: PropTypes.shape({
    isLoadingPayment: PropTypes.bool,
  }),
  translateMessage: PropTypes.func.isRequired,
};

export default Step2;
