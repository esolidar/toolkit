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
          <h4 className="title" data-testid="title-other-auctions">
            {title}
          </h4>
        </Col>
      </Row>
      <Row>
        {listAuctions.map((auction) => (
          <Col key={auction.id} sm={6} md={6} lg={3} data-testid={`listAuction-${auction.id}`}>
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
        <Col sm={3} md={4} className="mx-auto">
          <Button
            dataTestId="see-all-auctions"
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
