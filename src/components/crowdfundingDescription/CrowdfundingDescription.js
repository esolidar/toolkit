/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

class CrowdfundingDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showmoreDesc: false,
      showMoreDescButton: true,
      showMoreRewardButton: true,
      showmoreReward: false,
    };

    this.showMoreDescAction = this.showMoreDescAction.bind(this);
    this.showMoreRewardAction = this.showMoreRewardAction.bind(this);
  }

  showMoreDescAction = () => {
    this.setState({
      showmoreDesc: true,
      showMoreDescButton: false,
    });
  }

  showMoreRewardAction = () => {
    this.setState({
      showmoreReward: true,
      showMoreRewardButton: false,
    });
  }

  render() {
    const {
      showmoreDesc, showmoreReward, showMoreDescButton, showMoreRewardButton,
    } = this.state;
    const {
      campaign, env, lang, color,
    } = this.props;

    const campaignDescription = () => {
      let description;
      if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
        description = campaign.description;
      } else if (!campaign.description_en) {
        description = campaign.description;
      } else {
        description = campaign.description_en;
      }
      return description;
    };

    return (
      <div>
        {campaign.projects && (
          <Row>
            {campaign.projects.length > 0 && (
              <Col md={12}>
                <div className="description-header">
                  <FormattedMessage
                    id="crowdfunding.description.ods"
                    defaultMessage="Sustainable Development Goals"
                  />
                </div>
                <div>
                  {campaign.projects[0].ods.map((item) => (
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
            <div className="description-header" style={{ color, borderColor: color }}>
              <FormattedMessage
                id="crowdfunding.description"
                defaultMessage="Description"
              />
            </div>
            <div className={`description-text ${showmoreDesc ? 'description-show-all' : ''}`}>
              {campaignDescription().split('\n').map((item, index) => (
                <span key={index}>
                  {item}
                  <br />
                </span>
              ))}
            </div>
            {showMoreDescButton && (
              <div className="d-block d-sm-none text-center">
                <button type="button" onClick={this.showMoreDescAction} className="readmore-button">
                  <FormattedMessage
                    id="readmore"
                    defaultMessage="Read more"
                  />
                </button>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {campaign.reward === 1 && (
              <div>
                <div className="description-header" style={{ color, borderColor: color }}>
                  <FormattedMessage
                    id="crowdfunding.reward.text"
                    defaultMessage="Reward"
                  />
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
                    <button type="button" onClick={this.showMoreRewardAction} className="readmore-button">
                      <FormattedMessage
                        id="readmore"
                        defaultMessage="Read more"
                      />
                    </button>
                  </div>
                )}
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CrowdfundingDescription;

CrowdfundingDescription.propTypes = {
  campaign: PropTypes.object.isRequired,
  env: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  color: PropTypes.string,
};
