import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Icon from '../icon/Icon';

const HeartSeparator = () => (
  <div className="heartSeparator">
    <Row>
      <Col sm={{ span: 6, offset: 3 }} className="separator">
        <Icon iconClass="icon-heart" />
      </Col>
    </Row>
  </div>
);

export default HeartSeparator;
