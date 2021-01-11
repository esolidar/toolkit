import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage, FormattedNumber } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import { convertToMyCurrency } from '../../utils/index';
import Button from '../button/Button';
import TextField from '../../elements/textField/TextField';

const AuctionDetailRigth = ({
  auctionTitle,
  auction,
  isEnded,
  isCommingSoon,
  handleClickBid,
  error,
  translateMessage,
  minValue,
  showModalSubscribe,
  user,
  intl,
  inputBidValue,
  valueBidTextField,
}) => {
  const valueBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;
  const isSameCurrency = user ? auction.currency.small === user.currency.small : true;

  let supported = '';
  if (auction.brand) {
    supported = auction.brand;
  } else if (auction.recipient) {
    supported = auction.recipient.institution;
  } else {
    supported = auction.recipient.causes;
  }

  return (
    <>
      <Col sm={5}>
        <div>
          <Row>
            <Col sm={12}>
              <h2 className="auction-title" data-testid="auction-title">
                {auctionTitle}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="control-label mb-2" data-testid="title-last-bid">
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
            <Col sm={12} className={auction.blink ? 'txt-price-t blink' : 'txt-price-t'} data-testid="value-last-bid">
              <FormattedNumber
                value={valueBid}
                style="currency"
                currency={auction.currency.small}
              />
            </Col>
          </Row>
          {!isSameCurrency && (
            <Row>
              <Col sm={12} className="txt-bid-aprox">
                {convertToMyCurrency(valueBid, auction.currency)}
                <FormattedMessage
                  id="auction.detail.bidApprox"
                  defaultMessage=" approx."
                />
              </Col>
            </Row>
          )}
          {(!isEnded && !isCommingSoon) && (
            <Row>
              <Col sm={12} className="auction-content-label">
                <FormattedMessage
                  id="auction.detail.newBid"
                  defaultMessage="New Bid"
                />
              </Col>
              <Col sm={6} className={error && 'has-error'}>
                <TextField
                  dataTestId="inputBid"
                  field="id"
                  className="bid-input"
                  type="text"
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
                />
              </Col>
              <Col sm={6}>
                <Button
                  dataTestId="btn-bid"
                  extraClass="success-full"
                  text={translateMessage({ id: 'auction.button.bid', defaultMessage: 'Bid' })}
                  onClick={() => handleClickBid(inputBidValue)}
                />
              </Col>
              <Col sm={12} className="subscribe-auction mt-4">
                <button
                  type="button"
                  className="btn btn-link "
                  onClick={showModalSubscribe}
                >
                  <FormattedMessage
                    id="auction.detail.subscribeAuction"
                    defaultMessage="Subscribe the auction."
                  />
                </button>
              </Col>
            </Row>
          )}
          {isEnded && (
            <>
              <Row>
                <Col sm={12} className="auction-content-label" data-testid="label-ended">
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
          {supported && (
            <Col sm={12} className="auction-box text-center" data-testid="supported-section">
              <div className="text-center">
                <img className="npo-thumb" src={auction.brand ? supported.logo_thumbs.thumb : supported.thumbs.thumb} alt="thumb" />
                <FormattedMessage
                  id="auction.detail.proceedsSupport"
                  defaultMessage="Proceeds support "
                />
                <strong>{supported.name}</strong>
              </div>
            </Col>
          )}
        </div>
      </Col>
    </>
  );
};

AuctionDetailRigth.propTypes = {
  auctionTitle: PropTypes.string,
  auction: PropTypes.object,
  isEnded: PropTypes.bool,
  isCommingSoon: PropTypes.bool,
  handleClickBid: PropTypes.func,
  error: PropTypes.string,
  translateMessage: PropTypes.func,
  minValue: PropTypes.number,
  showModalSubscribe: PropTypes.func,
  user: PropTypes.shape({
    currency: PropTypes.shape({
      small: PropTypes.string,
    }),
  }),
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  inputBidValue: PropTypes.string,
  valueBidTextField: PropTypes.func,
};

export default injectIntl(AuctionDetailRigth);
