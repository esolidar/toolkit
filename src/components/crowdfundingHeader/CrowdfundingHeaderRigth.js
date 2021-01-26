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
  <>
    {campaign && (
      <>
        <Row>
          <Col sm={12}>
            <h2 className="title-campaign">
              {campaignTitle()}
            </h2>
          </Col>
        </Row>
        <CrowdfundingProgressBar
          contributesSum={campaign.contributes_sum}
          goal={campaign.goal}
        />
        <Row>
          <Col xs={5} className="raised-text">
            <FormattedNumber
              value={campaign.contributes_sum}
              style="currency"
              currency={campaign.currency.small}
            />
          </Col>
          <Col xs={7} className="goal-text text-right">
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
        <Row className="mt-1">
          <Col sm={12} className="total-donations-text mt-3">
            <FormattedMessage
              id="crowdfunding.total.number.donations"
              defaultMessage="Number of donations"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="total-donations-value">
            {campaign.contributes_count}
          </Col>
        </Row>
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
      </>
    )}
  </>
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
  textBtnDonate: PropTypes.string.isRequired,
  showDonate: PropTypes.bool,
};

CrowdfundingHeaderRigth.defaultProps = {
  showDonate: true,
};

export default CrowdfundingHeaderRigth;
