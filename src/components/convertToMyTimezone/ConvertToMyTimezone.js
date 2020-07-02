import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment-timezone';

const ConvertToMyTimezone = ({ format, date, locale }) => (
  <Moment utc tz={moment.tz.guess()} format={format} locale={locale}>
    {date}
  </Moment>
);

ConvertToMyTimezone.propTypes = {
  format: PropTypes.string,
  date: PropTypes.string.isRequired,
  locale: PropTypes.string,
};

ConvertToMyTimezone.defaultProps = {
  format: 'llll',
  locale: navigator.language,
};

export default ConvertToMyTimezone;
