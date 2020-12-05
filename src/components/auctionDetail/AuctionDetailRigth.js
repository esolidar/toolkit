import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { convertToMyCurrency } from '../../utils/index';
import AuctionBid from './AuctionBid';

const AuctionDetailRigth = ({
  auctionTitle,
  auction,
  isShowBid,
}) => {
  const supported = auction.recipient ? auction.recipient : auction.user;

  return (
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
              value={auction.last_bid.value}
              style="currency"
              currency={auction.currency.small}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="txt-bid-aprox">
            {convertToMyCurrency(auction.last_bid.value, auction.currency)}
            <FormattedMessage
              id="auction.detail.bidApprox"
              defaultMessage=" approx."
            />
          </Col>
        </Row>
        {isShowBid && (
          <AuctionBid
            isEnded={false}
          />
        )}
        {supported.institution && (
          <Col sm={12} className="auction-box text-center">
            <div className="text-center">
              <img className="npo-thumb" src={supported.institution.thumbs.thumb} alt="" />
              <FormattedMessage
                id="auction.detail.lastbid"
                defaultMessage="Proceeds support "
              />
              <strong>{supported.institution.name}</strong>
            </div>
          </Col>
        )}
      </div>
    </Col>
  );
};

AuctionDetailRigth.propTypes = {
  auctionTitle: PropTypes.string,
  auction: PropTypes.object,
  isShowBid: PropTypes.bool,
};

AuctionDetailRigth.defaultProps = {
  isShowBid: true,
};

export default AuctionDetailRigth;
