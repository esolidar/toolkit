import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import Tooltip from 'rc-tooltip';
import CountdownThumb from '../countdown';
import convertToMyCurrency from '../../utils/convertToMyCurrency';

const AuctionThumb = ({ auction, primaryColor, env, onExpiry, lang }) => {
  const today = moment(new Date(), 'YYYY-MM-DD HH:mm').toDate();
  const auctionEndDate = moment(auction.dateLimit, 'YYYY-MM-DD HH:mm').toDate();

  let supported = {};
  if (auction.recipient && auction.recipient.institution) {
    supported.title = auction.recipient.institution.name;
    supported.image = auction.recipient.institution.thumbs.thumb;
  } else if (auction.project) {
    supported.title = auction.project.title;
    supported.image = auction.project.images
      ? `${env.cdn_uploads_url}/${auction.project.images[0].image}`
      : `${env.cdn_static_url}/frontend/assets/no-image.jpg`;
  } else {
    supported = null;
  }

  let auctionTitle = '';
  if (lang === 'pt' || lang === 'br') {
    auctionTitle = auction.title;
  } else if (auction.title_en) {
    auctionTitle = auction.title_en;
  } else {
    auctionTitle = auction.title;
  }

  return (
    <div className="auction-pin-box">
      <div className="auction-photo-box">
        <div
          className="auction-photo"
          style={{
            backgroundImage: `url(${
              auction.images && auction.images.length > 0 ? auction.images[0].thumbs.detail : ''
            })`,
          }}
        />
      </div>
      <div className="countdown-auction-pin">
        <CountdownThumb
          onExpiry={onExpiry}
          startDate={auction.dateStart}
          endDate={auction.dateLimit}
          thumb={true}
        />
      </div>
      <Row className="row description">
        <Col xs={8} className="text">
          {auctionTitle}
        </Col>
        {supported && (
          <Col xs={4} className="text-right npo-logo">
            <Tooltip placement="top" overlay={supported.title}>
              <img src={supported.image} width="60" height="60" alt={supported.title} />
            </Tooltip>
          </Col>
        )}
      </Row>
      {auction.private === 0 && (
        <>
          {+today < +auctionEndDate && (
            <Row className="last-bid">
              <Col
                xs={5}
                className="last-bid-label"
                id={`last-bid-label-${auction.id}`}
                style={{ color: primaryColor }}
              >
                {auction.last_bid && <FormattedMessage id="auction.last.bid" />}
                {!auction.last_bid && (
                  <FormattedMessage id="homepage.toolsbox.charityAuctions.startBid" />
                )}
              </Col>
              <Col
                xs={7}
                className="last-bid-value text-right"
                id={`last-bid-value-${auction.id}`}
                style={{ color: primaryColor }}
              >
                {convertToMyCurrency(
                  auction.last_bid ? auction.last_bid.value : auction.bid_start,
                  auction.currency
                )}
              </Col>
            </Row>
          )}
          {+today >= +auctionEndDate && (
            <Row className="last-bid">
              <Col xs={5} className="last-bid-label" style={{ color: primaryColor }}>
                <FormattedMessage id="homepage.toolsbox.charityAuctions.raised" />
              </Col>
              {auction.last_bid && (
                <Col xs={7} className="last-bid-value text-right" style={{ color: primaryColor }}>
                  {convertToMyCurrency(
                    auction.last_bid ? auction.last_bid.value : auction.bid_start,
                    auction.currency
                  )}
                </Col>
              )}
              {!auction.last_bid && (
                <Col xs={7} className="last-bid-value text-right" style={{ color: primaryColor }}>
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
            <FormattedMessage id="homepage.toolsbox.charityAuctions.private" />
          </Col>
        </Row>
      )}
    </div>
  );
};

AuctionThumb.propTypes = {
  auction: PropTypes.shape({
    id: PropTypes.number,
    private: PropTypes.number,
    bid_start: PropTypes.number,
    currency: PropTypes.object,
    dateLimit: PropTypes.string,
    dateStart: PropTypes.string,
    images: PropTypes.array,
    blink: PropTypes.bool,
    project: PropTypes.object,
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
  primaryColor: PropTypes.string,
  env: PropTypes.object,
  onExpiry: PropTypes.func,
  lang: PropTypes.string,
};

AuctionThumb.defaultProps = {
  onExpiry: () => {},
  lang: 'en',
};

export default AuctionThumb;
