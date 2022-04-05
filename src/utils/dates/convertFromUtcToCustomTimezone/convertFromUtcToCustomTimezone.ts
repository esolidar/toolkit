import moment from 'moment-timezone';

/**
 * Converts a date in UTC to a given timezone
 * To be used whenever we have a timezone select in the saving form
 */

const convertFromUtcToCustomTimezone = (date: string, timezone: string, format?: string) => {
  const constTzDate = moment.utc(date).tz(timezone);
  return format ? constTzDate.format(format) : new Date(constTzDate.format('YYYY/MM/DD HH:mm:ss'));
};

export default convertFromUtcToCustomTimezone;
