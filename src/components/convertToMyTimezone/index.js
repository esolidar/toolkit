import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment-timezone';

const ConvertToMyTimezone = ({ format, date, locale, timezone }) => (
  <Moment utc tz={timezone} format={format} locale={locale}>
    {date}
  </Moment>
);

ConvertToMyTimezone.propTypes = {
  format: PropTypes.string,
  date: PropTypes.string.isRequired,
  locale: PropTypes.string,
  timezone: PropTypes.string,
};

ConvertToMyTimezone.defaultProps = {
  format: 'llll',
  locale: typeof window !== 'undefined' ? navigator.language : 'en',
  timezone: moment.tz.guess(),
};

export default ConvertToMyTimezone;
