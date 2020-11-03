import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import CrowdfundingProgressBar from '../crowdfundingProgressBar/CrowdfundingProgressBar';
import CrowdfundingPaymentMethod from '../crowdfundingPaymentMethod/CrowdfundingPaymentMethod';
import CrowdfundingContributeBtn from '../crowdfundingContributeBtn/CrowdfundingContributeBtn';

const CrowdfundingHeaderRigth = ({
  campaignTitle,
  campaign,
  env,
  errorMsgRequired,
  errorMsgAmount,
  showDonate,
  textBtnDonate,
}) => (
  <Col md={5}>
    {campaign && (
    <div>
      <Col sm={12}>
        <Row>
          <h2 className="title-campaign">
            {campaignTitle()}
          </h2>
        </Row>
      </Col>
      <CrowdfundingProgressBar
        contributesSum={campaign.contributes_sum}
        goal={campaign.goal}
      />
      <Col>
        <Row>
          <Col sm={6} className="raised-text">
            <Row>
              <FormattedNumber
                value={campaign.contributes_sum}
                style="currency"
                currency={campaign.currency.small}
              />
            </Row>
          </Col>
          <Col sm={6} className="goal-text text-right">
            <span className="goal-span">
              <FormattedMessage
                id="crowdfunding.goal"
                defaultMessage="Goal"
              />
            </span>
            <span className="goal-span">
              <FormattedNumber
                value={campaign.goal}
                style="currency"
                currency={campaign.currency.small}
              />
            </span>
          </Col>
        </Row>

      </Col>
      <Col sm={12} className="total-donations-text">
        <Row>
          <FormattedMessage
            id="crowdfunding.total.number.donations"
            defaultMessage="Number of donations"
          />
        </Row>
      </Col>
      <Col sm={12} className="total-donations-value">
        <Row>
          {campaign.contributes_count}
        </Row>
      </Col>
      {showDonate && (
      <CrowdfundingContributeBtn
        campaign={campaign}
        errorMsgRequired={errorMsgRequired}
        errorMsgAmount={errorMsgAmount}
        textBtnDonate={textBtnDonate}
      />
      )}
      <CrowdfundingPaymentMethod
        utrust={campaign.product.payment_method.utrust}
        paypal={campaign.product.payment_method.paypal}
        stripe={campaign.product.payment_method.stripe}
        sibsMbway={campaign.product.payment_method.sibs_mbway}
        sibsCc={campaign.product.payment_method.sibs_cc}
        cdnStaticUrl={env.cdn_static_url}
      />
    </div>
    )}
  </Col>
);

CrowdfundingHeaderRigth.propTypes = {
  campaignTitle: PropTypes.func,
  campaign: PropTypes.shape({
    contributes_sum: PropTypes.number,
    goal: PropTypes.number,
    currency: PropTypes.shape({
      small: PropTypes.string,
    }),
    product: PropTypes.shape({
      payment_method: PropTypes.shape({
        utrust: PropTypes.number,
        paypal: PropTypes.number,
        stripe: PropTypes.number,
        sibs_mbway: PropTypes.number,
        sibs_cc: PropTypes.number,
      }),
    }),
    contributes_count: PropTypes.number,
  }),
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
  errorMsgRequired: PropTypes.string,
  errorMsgAmount: PropTypes.string,
  textBtnDonate: PropTypes.string,
  showDonate: PropTypes.bool,
};

CrowdfundingHeaderRigth.defaultProps = {
  showDonate: true,
};

export default CrowdfundingHeaderRigth;
