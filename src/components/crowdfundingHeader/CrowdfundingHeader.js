import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import CrowdfundingProgressBar from '../crowdfundingProgressBar/CrowdfundingProgressBar';
import CrowdfundingPaymentMethod from '../crowdfundingPaymentMethod/CrowdfundingPaymentMethod';
import CrowdfundingContributeBtn from '../crowdfundingContributeBtn/CrowdfundingContributeBtn';

const CrowdfundingHeader = ({
  campaignTitle,
  campaign,
  env,
}) => (
  <Col md={5}>
    <Row>
      <Col sm={12}>
        <h2>
          {campaignTitle()}
        </h2>
      </Col>
      <CrowdfundingProgressBar contributesSum={campaign.contributes_sum} goal={campaign.goal} />
      <Col sm={6} className="raised-text">
        <FormattedNumber
          value={campaign.contributes_sum}
          style="currency"
          currency={campaign.currency.small}
        />
      </Col>
      <Col sm={6} className="goal-text text-right">
        <FormattedMessage
          id="crowdfunding.goal"
          defaultMessage="Goal"
        />
        <FormattedNumber
          value={campaign.goal}
          style="currency"
          currency={campaign.currency.small}
        />
      </Col>
      <Col sm={12} className="total-donations-text">
        <FormattedMessage
          id="crowdfunding.total.number.donations"
          defaultMessage="Number of donations"
        />
      </Col>
      <Col sm={12} className="total-donations-value">
        {campaign.contributes_count}
      </Col>
      <CrowdfundingContributeBtn campaign={campaign} />
      <CrowdfundingPaymentMethod
        utrust={campaign.product.payment_method.utrust}
        paypal={campaign.product.payment_method.paypal}
        stripe={campaign.product.payment_method.stripe}
        sibsMbway={campaign.product.payment_method.sibs_mbway}
        sibsCc={campaign.product.payment_method.sibs_cc}
        cdnStaticUrl={env.cdn_static_url}
      />
    </Row>
  </Col>
);

CrowdfundingHeader.propTypes = {
  campaignTitle: PropTypes.func,
  campaign: PropTypes.shape({
    contributes_sum: PropTypes.number,
    goal: PropTypes.number,
    currency: PropTypes.shape({
      small: PropTypes.number,
    }),
    product: PropTypes.shape({
      payment_method: PropTypes.shape({
        utrust: PropTypes.bool,
        paypal: PropTypes.bool,
        stripe: PropTypes.bool,
        sibs_mbway: PropTypes.bool,
        sibs_cc: PropTypes.bool,
      }),
    }),
    contributes_count: PropTypes.number,
  }),
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};

export default CrowdfundingHeader;
