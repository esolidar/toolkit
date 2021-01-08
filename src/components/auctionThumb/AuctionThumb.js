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
  const supported = auction.recipient.institution ? auction.recipient.institution : auction.recipient.causes;

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
          thumb={true}
        />
      </div>
      <Row className="row description">
        <Col xs={8} className="text">
          {auctionTitle}
        </Col>
        <Col xs={4} className="text-right npo-logo">
          <Tooltip placement="top" overlay={supported ? supported.name : ''}>
            <img src={supported ? supported.thumbs.thumb : ''} width="60" height="60" alt={supported ? supported.name : ''} />
          </Tooltip>
        </Col>
      </Row>
      {auction.private === 0 && (
        <>
          {+today < +auctionEndDate
            && (
              <Row className="last-bid">
                <Col xs={5} className="last-bid-label">
                  {auction.last_bid && (
                    <FormattedMessage
                      id="homepage.toolsbox.charityAuctions.lastBid"
                      defaultMessage="Last Bid"
                    />
                  )}
                  {!auction.last_bid && (
                    <FormattedMessage
                      id="homepage.toolsbox.charityAuctions.startBid"
                      defaultMessage="Starting Bid"
                    />
                  )}
                </Col>
                <Col xs={7} className={auction.blink ? 'last-bid-value text-right blink' : 'last-bid-value text-right'}>
                  {convertToMyCurrency(auction.last_bid ? auction.last_bid.value : auction.bid_start, auction.currency)}
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
              {auction.last_bid && (
                <Col xs={7} className="last-bid-value text-right">
                  {convertToMyCurrency(auction.last_bid ? auction.last_bid.value : auction.bid_start, auction.currency)}
                </Col>
              )}
              {!auction.last_bid && (
                <Col xs={7} className="last-bid-value text-right">
                  {convertToMyCurrency('0', auction.currency)}
                </Col>
              )}
            </Row>
          )}
        </>
      )}
      {auction.private === 1 && (
        <Row className="last-bid">
          <Col xs={12} className="text-center private">
            <FormattedMessage
              id="homepage.toolsbox.charityAuctions.private"
              defaultMessage="PRIVATE AUCTION"
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

AuctionThumb.propTypes = {
  auction: PropTypes.shape({
    private: PropTypes.number,
    bid_start: PropTypes.number,
    currency: PropTypes.object,
    dateLimit: PropTypes.string,
    dateStart: PropTypes.string,
    images: PropTypes.array,
    blink: PropTypes.bool,
    last_bid: PropTypes.shape({
      value: PropTypes.number,
    }),
    recipient: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.string,
        thumbs: PropTypes.shape({
          thumb: PropTypes.string,
        }),
      }),
      causes: PropTypes.string,
    }),
    user: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.string,
        thumbs: PropTypes.shape({
          thumb: PropTypes.string,
        }),
      }),
    }),
    title: PropTypes.string,
    title_en: PropTypes.string,
  }),
};

export default AuctionThumb;
