import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { injectIntl, FormattedMessage, FormattedNumber } from 'react-intl';
import Button from '../../elements/button/Button';
import TextField from '../../elements/textField/TextField';

const AuctionLastBid = ({
  auction,
  isEnded,
  isCommingSoon,
  handleClickBid,
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
    <Col sm={12} lg={10} className="header-bids mx-lg-auto">
      {(!isEnded && !isCommingSoon) && (
        <Row>
          <Col className="box box-top sticky-top mb-5">
            <Row className="d-flex justify-content-between">
              <div className="d-none d-sm-block">
                <Col>
                  <p className="control-label title-last-bid mb-3" id={`auction-last-bid-label-${auction.id}`} data-testid="title-last-bid" style={{ color: primaryColor }}>
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
                <Col className="txt-price-t" id={`auction-last-bid-value-${auction.id}`} data-testid="value-last-bid">
                  <FormattedNumber
                    value={lastBid}
                    style="currency"
                    currency={auction.currency.small}
                  />
                </Col>
              </div>

              <div className="d-flex">
                <div>
                  <Col className="auction-content-label text-top d-none d-sm-block" data-testid="new-bid" style={{ color: primaryColor }}>
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
                </div>
                <Col className="mr-sm-3">
                  <Button
                    dataTestId="button-bid"
                    extraClass="success-full mt-sm-4"
                    text={translateMessage({ id: 'auction.button.bid', defaultMessage: 'Bid' })}
                    onClick={() => handleClickBid(inputBidValue)}
                  />
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      )}
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
  error: PropTypes.string,
  translateMessage: PropTypes.func,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  minValue: PropTypes.number,
  inputBidValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  valueBidTextField: PropTypes.func,
  primaryColor: PropTypes.string,
};

export default injectIntl(AuctionLastBid);
