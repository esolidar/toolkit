/* eslint-disable no-nested-ternary */

import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Icon from '../icon';

const StatisticsBox = ({ features, footer }) => {
  const statistics = items =>
    items.map((item, index) => {
      if (index <= 2) {
        return (
          <Col
            sm={items.length === 1 ? 12 : items.length === 2 ? 6 : 4}
            className="stats-box"
            key={index}
          >
            <div className="text-center">
              <h2>{item.title}</h2>
              <h3>{item.statistics}</h3>
              <p>{item.subtitle}</p>
            </div>
          </Col>
        );
      }
      // eslint-disable-next-line no-console
      console.error('Only the first 3 features are displayed in items array.');
    });
  const footerList = items =>
    items.map((item, index) => (
      <Row key={index} data-testid="footer-row">
        <Col sm={5}>
          <h3>
            {item.iconClass && <Icon iconClass={item.iconClass} />}
            {item.title}
          </h3>
        </Col>
        <Col sm={2} className="text-center">
          <span className="people-involved">{item.statistics}</span>
        </Col>
        <Col sm={5} className="text-right">
          <span className="people-involved-stats">{item.subtitle}</span>
        </Col>
      </Row>
    ));

  return (
    <Row className="statisticsBox">
      <Col sm={12} className="statistics">
        <div className="box">
          <Row>{statistics(features)}</Row>
          {footer && (
            <Col sm={12} className="stats-bottom">
              {footerList(footer)}
            </Col>
          )}
        </div>
      </Col>
    </Row>
  );
};
StatisticsBox.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      statistics: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
      subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  footer: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      iconClass: PropTypes.string,
      statistics: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
      subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default StatisticsBox;
