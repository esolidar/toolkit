import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import Button from '../button/Button';

const CrowdfundingContributeBtn = ({
  campaign,
  onChangeValue,
  value,
  countDownStatus,
  checkoutContribution,
  isLoadingButton,
}) => (
  <Row>
    {(campaign.status === 'approved' || campaign.status === 'completed') && (
      <Col sm={7} className="donation-box">
        <span className="control-label">
          <FormattedMessage
            id="crowdfunding.new.donation"
            defaultMessage="NEW DONATION (Min. {value})"
            values={{ value: `${campaign.currency.symbol}${campaign.minimum_contribution}` }}
          />
        </span>
        <span className="control-label-note">
          <FormattedMessage
            id="crowdfunding.new.donation.note"
            defaultMessage="Use only integer numbers"
          />
        </span>
        <input
          type="number"
          id="inputDonation"
          onChange={onChangeValue}
          value={value}
          disabled={countDownStatus !== 'running'}
          placeholder={`${campaign.currency.symbol} 0,00`}
        />
      </Col>
    )}
    {(campaign.status === 'approved' || campaign.status === 'completed') && (
      <Col sm={5} className="donation-box">
        <Button
          extraClass="success-full btn btn-submit"
          onClick={checkoutContribution}
          disabled={((countDownStatus !== 'running') || isLoadingButton)}
          text="Donate"
        />
      </Col>
    )}
  </Row>
);

CrowdfundingContributeBtn.propTypes = {
  campaign: PropTypes.shape({
    status: PropTypes.string,
    minimum_contribution: PropTypes.number,
    currency: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      small: PropTypes.string,
      status: PropTypes.bool,
      symbol: PropTypes.string,
      value: PropTypes.string,
    }),
  }),
  onChangeValue: PropTypes.func,
  value: PropTypes.string,
  countDownStatus: PropTypes.string,
  checkoutContribution: PropTypes.func,
  isLoadingButton: PropTypes.bool,
};

export default CrowdfundingContributeBtn;
