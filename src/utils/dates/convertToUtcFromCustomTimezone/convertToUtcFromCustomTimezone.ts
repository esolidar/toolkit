import moment from 'moment-timezone';

/**
 * Converts a date from a given timezone to UTC
 * To be used whenever we have a timezone select in the saving form
 */

const convertToUtcFromCustomTimezone = (date: string, timezone: string, format?: string) => {
  const utcDate = moment.tz(date, timezone).utc();
  return format ? utcDate.format(format) : utcDate.toDate();
};

export default convertToUtcFromCustomTimezone;
