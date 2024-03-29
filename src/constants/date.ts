import { format, addMinutes } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

export const formatDate = (date: Date): string =>
  format(addMinutes(date, date.getTimezoneOffset()), 'yyyy/MM/dd HH:mm:ss');

export const dateFormat: string = 'yyyy-MM-dd HH:mm:ss';

export const getToday = (): Date => new Date(formatDate(zonedTimeToUtc(new Date(), timeZone)));
