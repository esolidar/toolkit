import React, { useState } from 'react';
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
}) => {
  const valueBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;

  const [value, setValue] = useState('');

  const valueBidTextField = (e) => {
    setValue(e.target.value);
  };

  return (
    <Col sm={12}>
      <Row>
        <Col className="box sticky-top" style={{ width: '100%', marginTop: '48px' }}>
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
            <Col sm={12} className="txt-price-t" data-testid="value-last-bid">
              <FormattedNumber
                value={valueBid}
                style="currency"
                currency={auction.currency.small}
              />
            </Col>
          </Row>
          {(!isEnded && !isCommingSoon) && (
            <Row>
              <Col sm={12} className="auction-content-label" data-testid="new-bid">
                <FormattedMessage
                  id="auction.detail.newBid"
                  defaultMessage="New Bid"
                />
              </Col>
              <Col sm={12} className={error && 'has-error'}>
                <TextField
                  dataTestId="bid-input"
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
                  field="forCompanies"
                />
              </Col>
              <Col sm={12}>
                <Button
                  dataTestId="button-bid"
                  extraClass="success-full"
                  text={translateMessage({ id: 'auction.button.bid', defaultMessage: 'Bid' })}
                  onClick={() => handleClickBid(value)}
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
  isCommingSoon: PropTypes.bool,
  handleClickBid: PropTypes.func,
  isShowModal: PropTypes.func,
  error: PropTypes.string,
  translateMessage: PropTypes.func,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  minValue: PropTypes.number,
};

export default injectIntl(AuctionLastBid);
