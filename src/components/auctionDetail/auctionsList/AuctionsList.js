import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import slugify from 'slugify';
import Button from '../../button/Button';
import AuctionThumb from '../../auctionThumb/AuctionThumb';

const AuctionsList = ({
  title,
  listAuctions,
  buttonTitle,
}) => (
  listAuctions && (
    <>
      <Row className="other-auctions">
        <Col sm={12} className="text-center">
          <h4 className="title">
            {title}
          </h4>
        </Col>
      </Row>
      <Row>
        {listAuctions.map((auction) => (
          <Col key={auction.id} sm={3}>
            <a
              href={`/${localStorage.lang}/auction/detail/${auction.id}-${slugify(auction.title, {
                replacement: '-',
                remove: /[?$*_+~./,()'"!\-:@]/g,
                lower: true,
              })}`}
              title={auction.title}
            >
              <AuctionThumb
                auction={auction}
              />
            </a>
          </Col>
        ))}
      </Row>
      <Row>
        <Col sm={3} className="mx-auto">
          <Button
            className="see-all-auctions"
            extraClass="info"
            href="/auctions/list"
            text={buttonTitle}
          />
        </Col>
      </Row>
    </>
  )
);

AuctionsList.propTypes = {
  title: PropTypes.string,
  listAuctions: PropTypes.array,
  auction: PropTypes.shape({
    id: PropTypes.number,
  }),
  buttonTitle: PropTypes.string,
};

export default AuctionsList;
