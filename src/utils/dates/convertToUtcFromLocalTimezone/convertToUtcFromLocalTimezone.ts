import moment from 'moment-timezone';

/**
 * Converts a date from user's local timezone to UTC
 * To be used whenever we have a timezone select in the saving form
 */

const convertToUtcFromLocalTimezone = (date: string, format?: string) => {
  const utcDate = moment(date).utc();
  return format ? utcDate.format(format) : utcDate.toDate();
};

export default convertToUtcFromLocalTimezone;
