import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import TextFieldFormat from '../../elements/textFieldFormat/TextFieldFormat';
import Button from '../button/Button';

const CrowdfundingContributeBtn = ({
  campaign,
  onChangeValue,
  errors,
  value,
  countDownStatus,
  checkoutContribution,
  isLoadingButton,
}) => (
  <Row>
    {(campaign.status === 'approved' || campaign.status === 'completed') && (
      <Col sm={7} className="donation-box">
        <h2 className="control-label">
          <FormattedMessage
            id="crowdfunding.new.donation"
            defaultMessage="NEW DONATION (Min. {value})"
            values={{ value: `${campaign.currency.symbol}${campaign.minimum_contribution}` }}
          />
        </h2>
        <span className="control-label-note">
          <FormattedMessage
            id="crowdfunding.new.donation.note"
            defaultMessage="Use only integer numbers"
          />
        </span>
        <TextFieldFormat
          onChange={onChangeValue}
          error={errors}
          value={value}
          prefix={campaign.currency.small}
          thousandSeparator={true}
          decimalScale={2}
          disabled={countDownStatus !== 'running'}
          placeholder={`${campaign.currency.symbol} 0,00`}
        />
      </Col>
    )}
    {(campaign.status === 'approved' || campaign.status === 'completed') && (
      <Col sm={5} className="donation-box">
        <Button
          className="btn btn-submit"
          onClick={checkoutContribution}
          disabled={((countDownStatus !== 'running') || isLoadingButton)}
        >
          <FormattedMessage
            id="crowdfunding.donate.button"
            defaultMessage="Donate"
          />
        </Button>
      </Col>
    )}
  </Row>
);

CrowdfundingContributeBtn.propTypes = {
  campaign: PropTypes.shape({
    status: PropTypes.string,
    minimum_contribution: PropTypes.string,
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
  errors: PropTypes.string,
  value: PropTypes.string,
  countDownStatus: PropTypes.string,
  checkoutContribution: PropTypes.func,
  isLoadingButton: PropTypes.bool,
};

export default CrowdfundingContributeBtn;
