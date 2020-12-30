import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Button from '../button/Button';

const AuctionSupport = ({
  auction,
  translateMessage,
}) => {
  const supported = auction.recipient ? auction.recipient : auction.user;

  return (
    <Row>
      <Col className="support-cause" data-testid="supported-section">
        {supported.institution && (
          <Row className="content-header">
            <Col sm={2} className="text-center">
              <img className="npo-thumb" src={supported.institution.thumbs.thumb} alt="thumb" />
            </Col>
            <Col sm={7}>
              <h4 className="npo-name" data-testid="supported-name">
                {supported.institution.name}
              </h4>
              <p className="npo-summary" data-testid="supported-summary">
                {supported.institution.description}
              </p>
            </Col>
            <Col sm={3}>
              <Button
                dataTestId="btn-support-charity"
                extraClass="info"
                target="_blank"
                href="#"
                text={translateMessage({
                  id: 'auction.detail.supportCharity',
                  defaultMessage: 'Support this charity',
                })}
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
  translateMessage: PropTypes.func,
};

export default AuctionSupport;
