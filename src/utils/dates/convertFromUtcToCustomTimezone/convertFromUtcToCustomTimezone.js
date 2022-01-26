import moment from 'moment-timezone';

const convertFromUtcToCustomTimezone = (date, timezone, format) => {
  const constTzDate = moment.utc(date).tz(timezone);
  const stringDateConverted = new Date(constTzDate.format('YYYY-MM-DD HH:mm:ss'));

  return format ? constTzDate.format(format) : stringDateConverted;
};

export default convertFromUtcToCustomTimezone;
