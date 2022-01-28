import moment from 'moment-timezone';

/**
 * Converts a date in UTC to user's local timezone
 * To be used whenever we dont have a timezone select in the saving form
 */

const convertFromUtcToLocalTimezone = (date: string, format?: string) => {
  const constTzDate = moment.utc(date).tz(moment.tz.guess());
  return format ? constTzDate.format(format) : constTzDate.toDate();
};

export default convertFromUtcToLocalTimezone;
