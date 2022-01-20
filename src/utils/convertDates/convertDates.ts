import moment from 'moment-timezone';

const format = 'YYYY-MM-DD HH:mm:ss';

export const convertTimezoneToUtc = (date: string, timezone: string) =>
  new Date(moment.tz(date, timezone).utc().format(format));

export const convertUtcToTimezone = (date: string, timezone: string) =>
  new Date(moment.utc(date).tz(timezone).format(format));
