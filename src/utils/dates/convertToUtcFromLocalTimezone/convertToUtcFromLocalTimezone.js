import moment from 'moment-timezone';

const convertToUtcFromLocalTimezone = (date, format) => {
  const utcDate = moment(date).utc();
  return format ? utcDate.format(format) : utcDate.toDate();
};

export default convertToUtcFromLocalTimezone;
