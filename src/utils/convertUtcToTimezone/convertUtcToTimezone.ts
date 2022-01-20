import moment from 'moment-timezone';

const format = 'YYYY-MM-DD HH:mm:ss';

const convertUtcToTimezone = (date: string, timezone: string) =>
  new Date(moment.utc(date).tz(timezone).format(format));

export default convertUtcToTimezone;
