import moment from 'moment-timezone';

const convertFromUtcToLocalTimezone = (date, format) => {
  const constTzDate = moment.utc(date).tz(moment.tz.guess());
  return format ? constTzDate.format(format) : constTzDate.toDate();
};

export default convertFromUtcToLocalTimezone;
