import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Button from '../button/Button';
import TextField from '../../elements/textField/TextField';

const AuctionLastBid = ({
  auction,
  isEnded,
  handleClickBid,
  valueBidTextField,
  isShowModal,
  error,
}) => {
  const valueBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;

  return (
    <Col sm={12}>
      <Row>
        <Col className="box sticky-top" style={{ width: '100%', 'margin-top': '75px' }}>
          <p className="control-label mb-2">
            {auction.bid_start && (
            <FormattedMessage
              id="auction.detail.startbid"
              defaultMessage="Start Bid"
            />
            )}
            {auction.last_bid && (
            <FormattedMessage
              id="auction.detail.lastbid"
              defaultMessage="Last Bid"
            />
            )}
          </p>
          <Row>
            <Col sm={12} className="txt-price-t">
              <FormattedNumber
                value={valueBid}
                style="currency"
                currency={auction.currency.small}
              />
            </Col>
          </Row>
          {!isEnded && (
          <Row>
            <Col sm={12} className="auction-content-label">
              <FormattedMessage
                id="auction.detail.newBid"
                defaultMessage="New Bid"
              />
            </Col>
            <Col sm={12} className={error && 'has-error'}>
              <TextField
                className="bid-input"
                type="text"
                onChange={(e) => valueBidTextField(e)}
                error={error}
                placeholder="Min. Value"
                field="forCompanies"
              />
            </Col>
            <Col sm={12}>
              <Button
                extraClass="success-full"
                text="Bid"
                onClick={handleClickBid}
              />
            </Col>
            <Col sm={12} className="subscribe-auction text-center mt-5">
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
        </Col>
      </Row>
    </Col>
  );
};

AuctionLastBid.propTypes = {
  auction: PropTypes.shape({
    bid_start: PropTypes.number,
    last_bid: PropTypes.shape({
      value: PropTypes.number,
    }),
    currency: PropTypes.object,
  }),
  isEnded: PropTypes.bool,
  handleClickBid: PropTypes.func,
  valueBidTextField: PropTypes.func,
  isShowModal: PropTypes.func,
  error: PropTypes.string,
};

export default AuctionLastBid;
