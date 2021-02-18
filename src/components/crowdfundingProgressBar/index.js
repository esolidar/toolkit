import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const CrowdfundingProgressBar = ({ contributesSum, goal }) => (
  <Col sm={12}>
    <Row className="goal">
      <div className="progress-goal-bar" style={{ width: `${(contributesSum / goal) * 100}%` }} />
    </Row>
  </Col>
);

CrowdfundingProgressBar.propTypes = {
  contributesSum: PropTypes.number,
  goal: PropTypes.number,
};

export default CrowdfundingProgressBar;
