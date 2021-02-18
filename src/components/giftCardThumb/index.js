import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const GiftCardThumb = ({
  giftCard,
  giftCardClick,
  expireText,
  usedAtText,
  usedText,
  noText,
  yesText,
  amountText,
  giftCardExpireAt,
  giftCardAmountValue,
}) => (
  <a href="#" className="giftCardButton" onClick={giftCardClick}>
    <Row className="gift-card-thumb">
      <Col sm={12} className="header unused" />
      <Col sm={6} className="date-label">
        {giftCard.giftcard_institution.length === 0 && expireText}
        {giftCard.giftcard_institution.length > 0 && usedAtText}
      </Col>
      <Col sm={6} className="date text-right">
        {giftCardExpireAt}
      </Col>
      <Col sm={12} className="giftcard-title">
        {giftCard.name}
      </Col>
      <Col sm={12} className="giftcard-footer">
        <Row>
          <Col sm={6} className="used-label">
            {usedText}
          </Col>
          <Col sm={6} className="text-right used">
            {giftCard.giftcard_institution.length === 0 && noText}
            {giftCard.giftcard_institution.length > 0 && yesText}
          </Col>
          <Col sm={6} className="used-label">
            {amountText}
          </Col>
          <Col sm={6} className="text-right amount-value">
            {giftCardAmountValue}
          </Col>
        </Row>
      </Col>
    </Row>
  </a>
);

export default GiftCardThumb;

GiftCardThumb.propTypes = {
  giftCard: PropTypes.object.isRequired,
  giftCardExpireAt: PropTypes.string.isRequired,
  giftCardAmountValue: PropTypes.string.isRequired,
  giftCardClick: PropTypes.func,
  expireText: PropTypes.string,
  usedAtText: PropTypes.string,
  usedText: PropTypes.string,
  noText: PropTypes.string,
  yesText: PropTypes.string,
  amountText: PropTypes.string,
};
