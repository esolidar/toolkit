import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import AuctionThumb from '../../auctionThumb/AuctionThumb';

const AuctionOthers = ({
  listAuctions,
}) => (
  <>
    {listAuctions && listAuctions.map((auction) => (
      <Col key={auction.id} sm={3}>
        <AuctionThumb
          auction={auction}
        />
      </Col>
    ))}
  </>
);

AuctionOthers.propTypes = {
  listAuctions: PropTypes.array,
  auction: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default AuctionOthers;
