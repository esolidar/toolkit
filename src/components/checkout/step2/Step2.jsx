/* eslint-disable react/destructuring-assignment */

import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import Loading from '../../loading';
import Button from '../../../elements/button';
import InvoicingData from '../invoicing/InvoicingData';

const Step2 = props => (
  <div>
    {props.state.isLoadingPayment && (
      <div className="loading-payment">
        <Loading
          message={useIntl().formatMessage({
            id: 'payment.loader.wait',
            defaultMessage: 'Please wait.',
          })}
        />
      </div>
    )}
    <Col sm={12}>
      <h2>
        <FormattedMessage id="checkout.invoicing.title" defaultMessage="Invoicing information" />
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
                text={useIntl().formatMessage({
                  id: 'crowdfunding.donation.checkout.prev',
                  defaultMessage: 'Prev',
                })}
              />
            </Col>
            <Col sm={6} className="text-right">
              <Button
                extraClass="success-full btn-next-step"
                onClick={() => props.nextStep(2)}
                text={useIntl().formatMessage({
                  id: 'crowdfunding.donation.checkout.next',
                  defaultMessage: 'Next',
                })}
              />
            </Col>
          </Row>
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
};

export default Step2;
