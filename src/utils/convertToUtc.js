import moment from 'moment-timezone';

const convertToUtc = (date, timezone, format = 'YYYY-MM-DD HH:mm:ss') => {
  return moment.tz(date, timezone).utc().format(format);
};

export default convertToUtc;
