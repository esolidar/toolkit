import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const FaqTabs = ({
  tabs,
  type,
  changeType,
}) => (
  <div className="wrapper-tabs">
    <Row>
      {tabs.map((tab, index) => (
        <Col
          xs={12}
          sm
          key={index}
          className={`tab ${tab.type === type ? 'active' : ''}`}
          onClick={() => changeType(tab.type)}
        >
          {tab.text}
        </Col>
      ))}
    </Row>
  </div>
);

FaqTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired,
};

export default FaqTabs;
