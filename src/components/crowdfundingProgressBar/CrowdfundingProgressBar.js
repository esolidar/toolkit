import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const CrowdfundingProgressBar = ({ contributesSum, goal }) => (
  <Col sm={12}>
    <div className="goal">
      <div
        className="progress-goal-bar"
        style={{ width: `${(contributesSum / goal) * 100}%` }}
      />
    </div>
  </Col>
);

CrowdfundingProgressBar.propTypes = {
  contributesSum: PropTypes.number,
  goal: PropTypes.number,
};

export default CrowdfundingProgressBar;
