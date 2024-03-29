import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../elements/button';

const CookiesMessage = ({ message, btnText, btnClick }) => (
  <div className="cookiesMessage">
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={9} lg={9}>
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Button extraClass="dark" text={btnText} onClick={btnClick} />
        </Col>
      </Row>
    </Container>
  </div>
);

CookiesMessage.propTypes = {
  message: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
};

export default CookiesMessage;
