import moment from 'moment-timezone';

export const convertToUtcFromLocalTimezone = (date, format) => {
  const utcDate = moment(date).utc();
  return format ? utcDate.format(format) : utcDate.toDate();
};

export const convertToUtcFromCustomTimezone = (date, timezone, format) => {
  const utcDate = moment.tz(date, timezone).utc();
  return format ? utcDate.format(format) : utcDate.toDate();
};

export const convertFromUtcToLocalTimezone = (date, format) => {
  const constTzDate = moment.utc(date).tz(moment.tz.guess());
  return format ? constTzDate.format(format) : constTzDate.toDate();
};

export const convertFromUtcToCustomTimezone = (date, timezone, format) => {
  const constTzDate = moment.utc(date).tz(timezone);
  const stringDateConverted = new Date(constTzDate.format('YYYY-MM-DD HH:mm:ss'));

  return format ? constTzDate.format(format) : stringDateConverted;
};
