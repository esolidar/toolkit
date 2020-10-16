import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const CrowdfundingPaymentMethod = ({
  utrust,
  paypal,
  stripe,
  sibsMbway,
  sibsCc,
  cdnStaticUrl,
}) => (
  <>
    <Col sm={12} className="share-label">
      <span className="control-label">
        <FormattedMessage
          id="payment.methods"
          defaultMessage="Payment methods"
        />
      </span>
    </Col>
    <Col sm={12}>
      {utrust === 1 && (
        <img src={`${cdnStaticUrl}/frontend/icons/ic-pm-utrust.png`} style={{ height: '20px', marginRight: '15px' }} alt="utrust" />
      )}
      {paypal === 1 && (
        <img src={`${cdnStaticUrl}/frontend/icons/ic-pm-paypal.png`} style={{ height: '20px', marginRight: '15px' }} alt="Paypal" />
      )}
      {stripe === 1 && (
        <img src={`${cdnStaticUrl}/frontend/icons/ic-pm-creditcard.png`} style={{ height: '20px', marginRight: '15px' }} alt="Credit Card" />
      )}
      {sibsMbway === 1 && (
        <img src={`${cdnStaticUrl}/frontend/icons/ic-pm-mbway.png`} style={{ height: '20px', marginRight: '15px' }} alt="MBway" />
      )}
      {sibsCc === 1 && (
        <img src={`${cdnStaticUrl}/frontend/icons/ic-pm-creditcard.png`} style={{ height: '20px', marginRight: '15px' }} alt="Credit Card" />
      )}
    </Col>
  </>
);

CrowdfundingPaymentMethod.propTypes = {
  utrust: PropTypes.bool,
  paypal: PropTypes.bool,
  stripe: PropTypes.bool,
  sibsMbway: PropTypes.bool,
  sibsCc: PropTypes.bool,
  cdnStaticUrl: PropTypes.string,
};

export default CrowdfundingPaymentMethod;
