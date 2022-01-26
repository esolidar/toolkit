import moment from 'moment-timezone';

const convertToUtcFromCustomTimezone = (date, timezone, format) => {
  const utcDate = moment.tz(date, timezone).utc();
  return format ? utcDate.format(format) : utcDate.toDate();
};

export default convertToUtcFromCustomTimezone;
