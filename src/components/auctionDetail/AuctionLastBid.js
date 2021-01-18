import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { injectIntl, FormattedMessage, FormattedNumber } from 'react-intl';
import Button from '../button/Button';
import TextField from '../../elements/textField/TextField';

const AuctionLastBid = ({
  auction,
  isEnded,
  isCommingSoon,
  handleClickBid,
  isShowModal,
  error,
  translateMessage,
  intl,
  minValue,
  inputBidValue,
  valueBidTextField,
  primaryColor,
}) => {
  const lastBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;

  return (
    <Col sm={12}>
      <Row>
        <Col className="box sticky-top mb-5" style={{ width: '100%', marginTop: '90px' }}>
          <Row>
            <Col>
              <p className="control-label title-last-bid mb-2" id={`auction-last-bid-label-${auction.id}`} data-testid="title-last-bid" style={{ color: primaryColor }}>
                {auction.last_bid ? (
                  <FormattedMessage
                    id="auction.detail.lastbid"
                    defaultMessage="Last Bid"
                  />
                )
                  : (
                    <FormattedMessage
                      id="auction.detail.startbid"
                      defaultMessage="Start Bid"
                    />
                  )}
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="txt-price-t" id={`auction-last-bid-value-${auction.id}`} data-testid="value-last-bid">
              <FormattedNumber
                value={lastBid}
                style="currency"
                currency={auction.currency.small}
              />
            </Col>
          </Row>
          {(!isEnded && !isCommingSoon) && (
            <Row>
              <Col sm={12} className="auction-content-label" data-testid="new-bid" style={{ color: primaryColor }}>
                <FormattedMessage
                  id="auction.detail.newBid"
                  defaultMessage="New Bid"
                />
              </Col>
              <Col sm={12} className={error && 'has-error'}>
                <TextField
                  dataTestId="bid-input"
                  className="bid-input"
                  type="number"
                  onChange={valueBidTextField}
                  error={error}
                  value={inputBidValue}
                  placeholder={
                    intl.formatMessage(
                      {
                        id: 'auction.textfield.minValue',
                        defaultMessage: 'Min. Value: {value}',
                      },
                      { value: minValue },
                    )
                  }
                  field="forCompanies"
                />
              </Col>
              <Col sm={12}>
                <Button
                  dataTestId="button-bid"
                  extraClass="success-full"
                  text={translateMessage({ id: 'auction.button.bid', defaultMessage: 'Bid' })}
                  onClick={() => handleClickBid(inputBidValue)}
                />
              </Col>
              <Col sm={12} className="subscribe-auction text-center mt-4" data-testid="subscribe-link">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => isShowModal(true)}
                >
                  <FormattedMessage
                    id="auction.detail.subscribeAuction"
                    defaultMessage="Subscribe the auction"
                  />
                </button>
              </Col>
            </Row>
          )}
          {isEnded && (
            <>
              <Row>
                <Col sm={12} className="auction-content-label" data-testid="label-ended" style={{ color: primaryColor }}>
                  <FormattedMessage
                    id="auction.detail.ended"
                    defaultMessage="Ended"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="end-auction" data-testid="label-ended-message">
                  <FormattedMessage
                    id="auction.detail.endedAuction"
                    defaultMessage="This auction has ended."
                  />
                </Col>
              </Row>
            </>
          )}
          {isCommingSoon && (
            <>
              <Row>
                <Col sm={12} className="auction-content-label" data-testid="label-ended">
                  <FormattedMessage
                    id="auction.detail.commingSoon"
                    defaultMessage="Comming Soon"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="end-auction" data-testid="label-ended-message">
                  <FormattedMessage
                    id="auction.detail.commingSoonAuction"
                    defaultMessage="You can make bids when this auction starts."
                  />
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Col>
  );
};

AuctionLastBid.propTypes = {
  auction: PropTypes.shape({
    id: PropTypes.number,
    bid_start: PropTypes.number,
    last_bid: PropTypes.shape({
      value: PropTypes.number,
    }),
    currency: PropTypes.object,
    blink: PropTypes.bool,
  }),
  isEnded: PropTypes.bool,
  isCommingSoon: PropTypes.bool,
  handleClickBid: PropTypes.func,
  isShowModal: PropTypes.func,
  error: PropTypes.string,
  translateMessage: PropTypes.func,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  minValue: PropTypes.number,
  inputBidValue: PropTypes.string,
  valueBidTextField: PropTypes.func,
  primaryColor: PropTypes.string,
};

export default injectIntl(AuctionLastBid);
