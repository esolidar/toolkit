/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

class CrowdfundingDescription extends Component {
  state = {
    showmoreDesc: false,
    showMoreDescButton: true,
    showMoreRewardButton: true,
    showmoreReward: false,
  };

  // this.showMoreDescAction = this.showMoreDescAction.bind(this);
  // this.showMoreRewardAction = this.showMoreRewardAction.bind(this);

  showMoreDescAction = () => {
    this.setState({
      showmoreDesc: true,
      showMoreDescButton: false,
    });
  };

  showMoreRewardAction = () => {
    this.setState({
      showmoreReward: true,
      showMoreRewardButton: false,
    });
  };

  render() {
    const { showmoreDesc, showmoreReward, showMoreDescButton, showMoreRewardButton } = this.state;
    const { campaign, env, lang, color, auction } = this.props;

    const locale = typeof window !== 'undefined' ? localStorage.getItem('lang') : 'en';
    const objCampaignOrAuction = Object.keys(campaign).length > 0 ? campaign : auction;

    const campaignDescription = () => {
      let description;
      if (locale === 'pt' || locale === 'br') {
        description = objCampaignOrAuction.description;
      } else if (!objCampaignOrAuction.description_en) {
        description = objCampaignOrAuction.description;
      } else {
        description = objCampaignOrAuction.description_en;
      }
      return description;
    };

    const auctionDescriptionLang = type => {
      let description;

      if (locale === 'pt' || locale === 'br') {
        description = auction[type];
      } else {
        description = auction[`${type}_en`];
      }
      return description;
    };

    return (
      <>
        {!!campaign && campaign.projects && (
          <Row>
            {campaign.projects.length > 0 && (
              <Col md={12}>
                <div
                  className="description-header"
                  style={{ color, borderColor: color, marginTop: '50px' }}
                >
                  <FormattedMessage
                    id="crowdfunding.description.ods"
                    defaultMessage="Sustainable Development Goals"
                  />
                </div>
                <div>
                  {campaign.projects[0].ods.map(item => (
                    <img
                      key={item.id}
                      src={`${env.cdn_static_url}/frontend/assets/ods/${lang}/ods-${item.id}.png`}
                      style={{
                        width: '70px',
                        height: '70px',
                        backgroundSize: 'cover',
                        float: 'left',
                        marginRight: '15px',
                        objectFit: 'cover',
                      }}
                      alt={`ods-${item.id}`}
                    />
                  ))}
                </div>
              </Col>
            )}
          </Row>
        )}
        <Row>
          <Col md={12}>
            <div
              className="description-header"
              style={{ color, borderColor: color, 'margin-top': '50px' }}
            >
              <FormattedMessage id="crowdfunding.description" defaultMessage="Description" />
            </div>
            <div className={`description-text ${showmoreDesc ? 'description-show-all' : ''}`}>
              {campaignDescription()
                .split('\n')
                .map((item, index) => (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                ))}
            </div>
            {showMoreDescButton && (
              <div className="d-block d-sm-none text-center">
                <button type="button" onClick={this.showMoreDescAction} className="readmore-button">
                  <FormattedMessage id="readmore" defaultMessage="Read more" />
                </button>
              </div>
            )}
            {auction && auctionDescriptionLang('shipping_description').length && (
              <>
                <div
                  className="shipping-header"
                  style={{ color, borderColor: color, 'margin-top': '50px' }}
                >
                  <FormattedMessage id="auction.shipping" defaultMessage="Shipping" />
                </div>
                <div className={`description-text ${showmoreDesc ? 'description-show-all' : ''}`}>
                  <span>{auctionDescriptionLang('shipping_description')}</span>
                </div>
              </>
            )}
            {auction && auctionDescriptionLang('payment_description').length && (
              <>
                <div
                  className="payment-header"
                  style={{ color, borderColor: color, 'margin-top': '50px' }}
                >
                  <FormattedMessage id="auction.payment" defaultMessage="Payment" />
                </div>
                <div className={`description-text ${showmoreDesc ? 'description-show-all' : ''}`}>
                  <span>{auctionDescriptionLang('payment_description')}</span>
                </div>
              </>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {!!campaign && campaign.reward === 1 && (
              <div>
                <div
                  className="description-header"
                  style={{ color, borderColor: color, 'margin-top': '50px' }}
                >
                  <FormattedMessage id="crowdfunding.reward.text" defaultMessage="Reward" />
                </div>
                <div className={`description-text ${showmoreReward ? 'description-show-all' : ''}`}>
                  {campaign.reward_description.split('\n').map((item, index) => (
                    <span key={index}>
                      {item}
                      <br />
                    </span>
                  ))}
                </div>
                {showMoreRewardButton && (
                  <div className="d-block d-sm-none text-center">
                    <button
                      type="button"
                      onClick={this.showMoreRewardAction}
                      className="readmore-button"
                    >
                      <FormattedMessage id="readmore" defaultMessage="Read more" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default CrowdfundingDescription;

CrowdfundingDescription.propTypes = {
  campaign: PropTypes.object,
  auction: PropTypes.object,
  env: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  color: PropTypes.string,
};
