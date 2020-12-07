import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Button from '../button/Button';

const AuctionSupport = ({
  auction,
}) => {
  const supported = auction.recipient ? auction.recipient : auction.user;

  return (
    <Row>
      <Col md={12} className="support-cause">
        {supported.institution && (
          <Row className="content-header">
            <Col sm={2} className="text-center">
              <img className="npo-thumb" src={supported.institution.thumbs.thumb} alt="" />
            </Col>
            <Col sm={7}>
              <h4 className="npo-name">
                {supported.institution.name}
              </h4>
              <p className="npo-summary">
                {supported.institution.description}
              </p>
            </Col>
            <Col sm={3}>
              <Button
                extraClass="info"
                target="_blank"
                href="#"
                text="Support this charity"
              />
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

AuctionSupport.propTypes = {
  auction: PropTypes.shape({
    recipient: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.string,
        thumbs: PropTypes.shape({
          thumb: PropTypes.string,
        }),
      }),
    }),
    user: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.string,
        thumbs: PropTypes.shape({
          thumb: PropTypes.string,
        }),
      }),
    }),
  }),

};

export default AuctionSupport;
