import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import Tooltip from 'rc-tooltip';
import CountdownThumb from '../countdown/Countdown';
import { convertToMyCurrency } from '../../utils/index';

const AuctionThumb = ({
  auction,
}) => {
  const today = moment(new Date(), 'YYYY-MM-DD HH:mm').toDate();
  const auctionEndDate = moment(auction.dateLimit, 'YYYY-MM-DD HH:mm').toDate();

  let auctionTitle = '';
  if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
    auctionTitle = auction.title;
  } else if (auction.title_en) {
    auctionTitle = auction.title_en;
  } else {
    auctionTitle = auction.title;
  }

  return (
    <div className="auction-pin-box">
      <div className="auction-photo-box">
        <div className="auction-photo" style={{ backgroundImage: `url(${auction.images && auction.images.length > 0 ? auction.images[0].thumbs.detail : ''})` }} />
      </div>
      <div className="countdown-auction-pin">
        <CountdownThumb
          startDate={auction.dateStart}
          endDate={auction.dateLimit}
        />
      </div>
      <Row className="row description">
        <Col xs={8} className="text">
          {auctionTitle}
        </Col>
        <Col xs={4} className="text-right npo-logo">
          <Tooltip placement="top" overlay={auction.recipient.institution ? auction.recipient.institution.name : ''}>
            <img src={auction.recipient.institution ? auction.recipient.institution.thumbs.thumb : ''} width="60" height="60" alt={auction.recipient.institution ? auction.recipient.institution.name : ''} />
          </Tooltip>
        </Col>
      </Row>
      {+today < +auctionEndDate
        && (
        <Row className="last-bid">
          <Col xs={5} className="last-bid-label">
            {auction.last_bid_value && (
            <FormattedMessage
              id="homepage.toolsbox.charityAuctions.lastBid"
              defaultMessage="Last Bid"
            />
            )}
            {!auction.last_bid_value && (
            <FormattedMessage
              id="homepage.toolsbox.charityAuctions.startBid"
              defaultMessage="Starting Bid"
            />
            )}
          </Col>
          <Col xs={7} className="last-bid-value text-right">
            {convertToMyCurrency(auction.last_bid_value ? auction.last_bid_value.value : auction.bid_start, auction.currency)}
          </Col>
        </Row>
        )}
      {+today >= +auctionEndDate && (
        <Row className="last-bid">
          <Col xs={5} className="last-bid-label">
            <FormattedMessage
              id="homepage.toolsbox.charityAuctions.raised"
              defaultMessage="Raised"
            />
          </Col>
          {auction.last_bid_value && (
            <Col xs={7} className="last-bid-value text-right">
              {convertToMyCurrency(auction.last_bid_value ? auction.last_bid_value.value : auction.bid_start, auction.currency)}
            </Col>
          )}
          {!auction.last_bid_value && (
            <Col xs={7} className="last-bid-value text-right">
              {convertToMyCurrency('0', auction.currency)}
            </Col>
          )}
        </Row>
      )}
    </div>
  );
};

AuctionThumb.propTypes = {
  auction: PropTypes.shape({
    bid_start: PropTypes.any,
    currency: PropTypes.any,
    dateLimit: PropTypes.any,
    dateStart: PropTypes.any,
    images: PropTypes.array,
    last_bid_value: PropTypes.shape({
      value: PropTypes.any,
    }),
    recipient: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.any,
        thumbs: PropTypes.shape({
          thumb: PropTypes.any,
        }),
      }),
    }),
    title: PropTypes.any,
    title_en: PropTypes.any,
  }),
};

export default AuctionThumb;
