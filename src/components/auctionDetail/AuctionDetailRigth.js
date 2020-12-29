import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage, FormattedNumber } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import { convertToMyCurrency } from '../../utils/index';
import Button from '../button/Button';
import TextField from '../../elements/textField/TextField';

const AuctionDetailRigth = ({
  auctionTitle,
  auction,
  isShowBid,
  isEnded,
  handleClickBid,
  error,
  translateMessage,
  minValue,
  showModalSubscribe,
  user,
  intl,
}) => {
  const valueBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;
  const isSameCurrency = auction.currency.small === user.currency.small;

  const [value, setValue] = useState('');

  const valueBidTextField = (e) => {
    setValue(e.target.value);
  };

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
              <h2 className="auction-title">
                {auctionTitle}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="auction-content-label">
              <FormattedMessage
                id="auction.detail.lastbid"
                defaultMessage="Last Bid"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="txt-price-t">
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
          {(isShowBid && !isEnded) && (
            <Row>
              <Col sm={12} className="auction-content-label">
                <FormattedMessage
                  id="auction.detail.newBid"
                  defaultMessage="New Bid"
                />
              </Col>
              <Col sm={6} className={error && 'has-error'}>
                <TextField
                  field="id"
                  className="bid-input"
                  type="text"
                  onChange={valueBidTextField}
                  error={error}
                  value={value}
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
                  extraClass="success-full"
                  text={translateMessage({ id: 'auction.button.bid', defaultMessage: 'Bid' })}
                  onClick={() => handleClickBid(value)}
                />
              </Col>
              <Col sm={12} className="subscribe-auction mt-5">
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
          {(isShowBid && isEnded) && (
            <>
              <Row>
                <Col sm={12} className="auction-content-label">
                  <FormattedMessage
                    id="auction.detail.ended"
                    defaultMessage="Ended"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="end-auction">
                  <FormattedMessage
                    id="auction.detail.endedAuction"
                    defaultMessage="This auction has ended."
                  />
                </Col>
              </Row>
            </>
          )}
          {supported && (
            <Col sm={12} className="auction-box text-center">
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
  isShowBid: PropTypes.bool,
  isEnded: PropTypes.bool,
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
};

AuctionDetailRigth.defaultProps = {
  isShowBid: true,
};

export default injectIntl(AuctionDetailRigth);
