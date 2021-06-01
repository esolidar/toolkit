import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import CrowdfundingProgressBar from '../crowdfundingProgressBar';
import CrowdfundingPaymentMethod from '../crowdfundingPaymentMethod';
import CrowdfundingContributeBtn from '../crowdfundingContributeBtn';
import SupportedSection from '../supportedSection';

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
            <h2 className="title-campaign">{campaignTitle()}</h2>
          </Col>
        </Row>
        <CrowdfundingProgressBar contributesSum={campaign.contributes_sum} goal={campaign.goal} />
        <Row>
          <Col xs={12} sm={5} className="raised-text">
            <FormattedNumber
              value={campaign.contributes_sum}
              style="currency"
              currency={campaign.currency.small}
            />
          </Col>
          <Col xs={12} sm={7} className="goal-text">
            <span className="goal-span">
              <FormattedMessage id="crowdfunding.goal" defaultMessage="Goal" />
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
        {!!campaign.company && !!campaign.company.brands.length && (
          <SupportedSection
            href={`${env.esolidar_url}b/${campaign.company.brands[0].username}`}
            imgSrc={campaign.company.brands[0].logo_thumbs.thumb}
            text={
              <FormattedMessage
                id="crowdfunding.detail.companySupport"
                values={{
                  companyName: campaign.company.name,
                }}
              />
            }
          />
        )}
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
    company: PropTypes.shape({
      name: PropTypes.string,
      brands: PropTypes.array,
      payment_method: PropTypes.shape({
        thumb: PropTypes.string,
      }),
    }),
  }),
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
    esolidar_url: PropTypes.string,
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
