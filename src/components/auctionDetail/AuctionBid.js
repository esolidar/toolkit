import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Button from '../button/Button';
import TextField from '../../elements/textField/TextField';

const AuctionBid = ({
  isEnded,
}) => (
  <>
    {!isEnded && (
    <Row>
      <Col sm={12} className="auction-content-label">
        <FormattedMessage
          id="auction.detail.newBid"
          defaultMessage="New Bid"
        />
      </Col>
      <Col sm={6}>
        <TextField
          label=""
          type="text"
          onChange={() => { }}
          error=""
          placeholder="Min. value"
          defaultValue=""
          field="forCompanies"
        />
      </Col>
      <Col sm={6}>
        <Button
          extraClass="success-full"
          text="Bid"
        />
      </Col>
      <Col sm={12} className="subscribe-auction">
        <a href="#">
          <FormattedMessage
            id="auction.detail.subscribeAuction"
            defaultMessage="Subscribe the auction"
          />
        </a>
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
  </>
);

AuctionBid.propTypes = {
  isEnded: PropTypes.bool,
};

AuctionBid.defaultProps = {
  isEnded: false,
};

export default AuctionBid;
