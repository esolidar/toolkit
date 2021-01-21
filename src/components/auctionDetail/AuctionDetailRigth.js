import React from 'react';
import PropTypes from 'prop-types';
import {
  injectIntl, FormattedMessage, FormattedNumber,
} from 'react-intl';
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
  primaryColor,
  inputRef,
  env,
}) => {
  const valueBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;
  const isSameCurrency = user ? auction.currency.small === user.currency.small : true;

  let supported = {};
  if (auction.recipient && auction.recipient.institution) {
    supported.title = auction.recipient.institution.name;
    supported.image = auction.recipient.institution.thumbs.thumb;
  } else if (auction.brand) {
    supported.title = auction.brand.name;
    supported.image = auction.brand.logo_thumbs.thumb;
  } else if (auction.project) {
    supported.title = auction.project.title;
    supported.image = auction.project.images ? `${env.cdn_uploads_url}/${auction.project.images[0].image}` : `${env.cdn_static_url}/frontend/assets/no-image.jpg`;
  } else {
    supported = null;
  }

  return (
    <>
      <Col sm={5}>
        <div>
          <Row>
            <Col sm={12}>
              <h2 className="auction-title d-none d-sm-block" data-testid="auction-title">
                {auctionTitle}
              </h2>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <p className="control-label title-last-bid mb-2" id={`last-bid-label-${auction.id}`} data-testid="title-last-bid" style={{ color: primaryColor }}>
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
            <Col sm={12} className="txt-price-t" id={`last-bid-value-${auction.id}`} data-testid="value-last-bid">
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
              <Col sm={12} className="auction-content-label" style={{ color: primaryColor }}>
                <FormattedMessage
                  id="auction.detail.newBid"
                  defaultMessage="New Bid"
                />
              </Col>
              <Col sm={6} className={error && 'has-error'}>
                <TextField
                  dataTestId="inputBid"
                  field="id"
                  id="input-bid-detail"
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
                  inputRef={inputRef}
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
          {supported && (
            <Col sm={12} className="auction-box" data-testid="supported-section">
              <div>
                <img className="npo-thumb" src={supported.image} alt="thumb" />
                {(auction.brand && auction.recipient) && (
                  <FormattedMessage
                    id="auction.detail.brandSupport"
                    defaultMessage="{brandName} will benefit {instituionName} with this auction."
                    values={{ brandName: auction.brand.name, instituionName: auction.recipient.institution.name }}
                  />
                )}
                {(auction.brand && !auction.recipient) && (
                  <FormattedMessage
                    id="auction.detail.proceedsSupport"
                    defaultMessage="Proceeds support {brandName}"
                    values={{ brandName: auction.brand.name }}
                  />
                )}
                {(!auction.brand && auction.recipient) && (
                  <FormattedMessage
                    id="auction.detail.institutionSupport"
                    defaultMessage="Proceeds support {instituionName}"
                    values={{ instituionName: auction.recipient.institution.name }}
                  />
                )}
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
  inputBidValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  valueBidTextField: PropTypes.func,
  primaryColor: PropTypes.string,
  env: PropTypes.object,
  inputRef: PropTypes.object,
};

export default injectIntl(AuctionDetailRigth);
