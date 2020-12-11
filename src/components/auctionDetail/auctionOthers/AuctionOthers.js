import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import AuctionThumb from '../../auctionThumb/AuctionThumb';

const AuctionOthers = ({
  listAuctions,
}) => (
  <>
    {listAuctions && listAuctions.map((auction) => (
      <Col sm={3}>
        <AuctionThumb
          auction={auction}
        />
      </Col>
    ))}
  </>
);

AuctionOthers.propTypes = {
  listAuctions: PropTypes.object,
};

export default AuctionOthers;
