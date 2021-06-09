/* eslint-disable no-nested-ternary */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const StatisticsBox = ({ features, footer }) => {
  const statistics = items =>
    items.map((item, index) => (
      <div className="stats-box" key={index} style={{ flexBasis: `${100 / items.length}%` }}>
        <div className="text-center">
          <h2>{item.title}</h2>
          <h3>{item.statistics}</h3>
          <p>{item.subtitle}</p>
        </div>
      </div>
    ));
  const footerList = items =>
    items.map((item, index) => (
      <div key={index} data-testid="footer-row" className="footer-features">
        <h3>
          {item.iconClass && <Icon iconClass={item.iconClass} />}
          {item.title}
        </h3>
        <span className="people-involved">{item.statistics}</span>
        <span className="people-involved-stats">{item.subtitle}</span>
      </div>
    ));

  return (
    <div className="statisticsBox">
      <div className="statistics">
        <div className="box">
          <div className="statics-features">{statistics(features)}</div>
          {footer && <div className="stats-bottom">{footerList(footer)}</div>}
        </div>
      </div>
    </div>
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
